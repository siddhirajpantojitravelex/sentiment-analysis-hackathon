const QUERIES = {
    HEALTH_CHECK :{
        GET_DATE : 'Select current_timestamp '
    },
    SENTIMENT :{
        SELECT_ALL_BY_STATUS : ' Select * from  SENTIMENT ',
        SELECT_BY_EMPTY_DESCRIPTION_MAG: ' Select * from SENTIMENT WHERE description_magnitude IS NULL ',
        SELECT_MAX_ID : 'select max(review_id) from sentiment',
        CREATE : 'CREATE TABLE if not exists public.sentiment (     review_id serial NOT NULL,     date date,     review_title text COLLATE pg_catalog."default",     review_description text COLLATE pg_catalog."default",     role text COLLATE pg_catalog."default",     pros text COLLATE pg_catalog."default",     cons text COLLATE pg_catalog."default",     advice text COLLATE pg_catalog."default",     rating text COLLATE pg_catalog."default",     like_count integer,     description_value integer,     description_magnitude integer,     prod_value integer,     pros_magnitude integer,     cons_value integer,     cons_magnitude integer,     CONSTRAINT sentiment_pkey PRIMARY KEY (review_id) ) WITH (     OIDS = FALSE )',
        DROP : 'DROP TABLE IF EXISTS SENTIMENT',
        INSERT : "INSERT INTO public.sentiment(date, review_title, review_description, role, pros, cons, advice, rating, like_count) 	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
        DELETE : 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        UPDATE: 'UPDATE SENTIMENT SET description_value = $2, description_magnitude = $3, prod_value = $4, pros_magnitude = $5, cons_value = $6, cons_magnitude = $7 ,result = $8 WHERE review_id = $1 RETURNING * ',
        MAGIC_WORD_EXISTS :'Select count(*) from SENTIMENT  where review_id = $1'
    },
    SENTIMENT_CLASSIFICATION :{
        SELECT_ALL_BY_STATUS : ' Select * from  SENTIMENT_CLASSIFICATION ',
        CREATE : 'CREATE TABLE if not exists public.SENTIMENT_CLASSIFICATION (     classification_id serial NOT NULL,     review_classification_id integer,     classification_description text COLLATE pg_catalog."default",     CONSTRAINT sentiment_classification_pkey PRIMARY KEY (classification_id),     CONSTRAINT foreign_ket_sentiment FOREIGN KEY (review_classification_id)         REFERENCES public.sentiment (review_id) MATCH SIMPLE         ON UPDATE NO ACTION         ON DELETE NO ACTION ) WITH (     OIDS = FALSE )',
        DROP : 'DROP TABLE IF EXISTS SENTIMENT_CLASSIFICATION',
        INSERT : "INSERT INTO public.sentiment_classification(review_classification_id, classification_description) VALUES ($1, $2) RETURNING * ",
        DELETE : 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        UPDATE : 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        MAGIC_WORD_EXISTS :'Select count(*) from SENTIMENT  where review_id = $1'
    }
};

module.exports = {QUERIES};