const QUERIES = {
    HEALTH_CHECK: {
        GET_DATE: 'Select current_timestamp '
    },

    SENTIMENT: {
        SELECT_ALL_BY_STATUS: ' Select * from  SENTIMENT ',
        SELECT_BY_EMPTY_DESCRIPTION_MAG: ' Select * from SENTIMENT WHERE result IS NULL ',
        SELECT_MAX_ID: 'select max(review_id) from sentiment',
        CREATE: 'CREATE TABLE if not exists public.SENTIMENT (     review_id serial NOT NULL ,     date date,     review_title text COLLATE pg_catalog."default",     review_description text COLLATE pg_catalog."default",     role text COLLATE pg_catalog."default",     pros text COLLATE pg_catalog."default",     cons text COLLATE pg_catalog."default",     advice text COLLATE pg_catalog."default",     rating text COLLATE pg_catalog."default",     like_count integer,     description_value decimal,     description_magnitude decimal,     pros_value decimal,     pros_magnitude decimal,     cons_value decimal,     cons_magnitude decimal, 	result decimal     CONSTRAINT sentiment_pkey PRIMARY KEY (review_id) ) WITH (     OIDS = FALSE )',
        DROP: 'DROP TABLE IF EXISTS SENTIMENT',
        INSERT: "INSERT INTO public.sentiment(date, review_title, review_description, role, pros, cons, advice, rating, like_count) 	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
        DELETE: 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        UPDATE: 'UPDATE SENTIMENT SET pros_value = $2, pros_magnitude = $3, cons_value = $4, cons_magnitude = $5 ,result = $6 WHERE review_id = $1 RETURNING * ',
        MAGIC_WORD_EXISTS: 'Select count(*) from SENTIMENT  where review_id = $1'
    },
    SENTIMENT_CLASSIFICATION: {
        SELECT_ALL_BY_STATUS: ' Select * from  SENTIMENT_CLASSIFICATION ',
        CREATE: 'CREATE TABLE if not exists public.SENTIMENT_CLASSIFICATION (     classification_id serial NOT NULL,     review_classification_id integer,     classification_description text COLLATE pg_catalog."default", 	classification_rating decimal,     CONSTRAINT sentiment_classification_pkey PRIMARY KEY (classification_id),     CONSTRAINT foreign_ket_sentiment FOREIGN KEY (review_classification_id)         REFERENCES public.sentiment (review_id) MATCH SIMPLE         ON UPDATE NO ACTION         ON DELETE NO ACTION ) WITH (     OIDS = FALSE )',
        DROP: 'DROP TABLE IF EXISTS SENTIMENT_CLASSIFICATION',
        INSERT: "INSERT INTO public.sentiment_classification(review_classification_id, classification_description, classification_rating) VALUES ($1, $2, $3) RETURNING * ",
        DELETE: 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        UPDATE: 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        MAGIC_WORD_EXISTS: 'Select count(*) from SENTIMENT  where review_id = $1',
        MAIN_GRAPH: 'SELECT AVG(classification_rating)as value, classification_description FROM SENTIMENT_CLASSIFICATION GROUP BY classification_description',
        INNER_GRAPH: "SELECT COUNT(*) as value, (case when result > 1 then 'Positive' when result <0 then 'Negative' else 'Neutral'  end ) as category FROM sentiment where review_id in ( SELECT review_classification_id from sentiment_classification where classification_description = $1 ) group by category "
    }
};

module.exports = { QUERIES };