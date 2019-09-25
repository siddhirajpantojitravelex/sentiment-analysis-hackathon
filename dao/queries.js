const QUERIES = {
    HEALTH_CHECK: {
        GET_DATE: 'Select current_timestamp '
    },
    SENTIMENT: {
        SELECT_ALL_BY_STATUS: ' Select * from  SENTIMENT ',
        SELECT_MAX_ID: 'select max(review_id) from sentiment',
        CREATE: 'CREATE TABLE if not exists public.SENTIMENT (     review_id serial NOT NULL ,     date date,     review_title text COLLATE pg_catalog."default",     review_description text COLLATE pg_catalog."default",     role text COLLATE pg_catalog."default",     pros text COLLATE pg_catalog."default",     cons text COLLATE pg_catalog."default",     advice text COLLATE pg_catalog."default",     rating text COLLATE pg_catalog."default",     like_count integer,     description_value decimal,     description_magnitude decimal,     prod_value decimal,     pros_magnitude decimal,     cons_value decimal,     cons_magnitude decimal, 	result decimal     CONSTRAINT sentiment_pkey PRIMARY KEY (review_id) ) WITH (     OIDS = FALSE )',
        DROP: 'DROP TABLE IF EXISTS SENTIMENT',
        INSERT: "INSERT INTO public.sentiment(date, review_title, review_description, role, pros, cons, advice, rating, like_count) 	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
        DELETE: 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        UPDATE: 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        MAGIC_WORD_EXISTS: 'Select count(*) from SENTIMENT  where review_id = $1'
    },
    SENTIMENT_CLASSIFICATION: {
        SELECT_ALL_BY_STATUS: ' Select * from  SENTIMENT_CLASSIFICATION ',
        CREATE: 'CREATE TABLE if not exists public.SENTIMENT_CLASSIFICATION (     classification_id serial NOT NULL,     review_classification_id integer,     classification_description text COLLATE pg_catalog."default", 	classification_rating decimal,     CONSTRAINT sentiment_classification_pkey PRIMARY KEY (classification_id),     CONSTRAINT foreign_ket_sentiment FOREIGN KEY (review_classification_id)         REFERENCES public.sentiment (review_id) MATCH SIMPLE         ON UPDATE NO ACTION         ON DELETE NO ACTION ) WITH (     OIDS = FALSE )',
        DROP: 'DROP TABLE IF EXISTS SENTIMENT_CLASSIFICATION',
        INSERT: "INSERT INTO public.sentiment_classification(review_classification_id, classification_description, classification_rating) VALUES ($1, $2, $3) RETURNING * ",
        DELETE: 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        UPDATE: 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        MAGIC_WORD_EXISTS: 'Select count(*) from SENTIMENT  where review_id = $1'
    }
};

module.exports = { QUERIES };