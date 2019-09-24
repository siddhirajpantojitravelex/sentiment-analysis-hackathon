const QUERIES = {
    HEALTH_CHECK :{
        GET_DATE : 'Select current_timestamp '
    },
    SENTIMENT :{
        SELECT_ALL_BY_STATUS : ' Select * from  SENTIMENT ',
        CREATE : 'CREATE TABLE is not exists public.sentiment (     review_id serial NOT NULL,     date date,     review_title text COLLATE pg_catalog."default",     review_description text COLLATE pg_catalog."default",     role text COLLATE pg_catalog."default",     pros text COLLATE pg_catalog."default",     cons text COLLATE pg_catalog."default",     advice text COLLATE pg_catalog."default",     rating text COLLATE pg_catalog."default",     like_count integer,     description_value integer,     description_magnitude integer,     prod_value integer,     pros_magnitude integer,     cons_value integer,     cons_magnitude integer,     CONSTRAINT sentiment_pkey PRIMARY KEY (review_id) ) WITH (     OIDS = FALSE )',
        DROP : 'DROP TABLE IF EXISTS SENTIMENT',
        INSERT : "INSERT INTO public.sentiment(date, review_title, review_description, role, pros, cons, advice, rating, like_count) 	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
        DELETE : 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        UPDATE : 'DELETE FROM SENTIMENT WHERE review_id = $1 returning * ',
        MAGIC_WORD_EXISTS :'Select count(*) from SENTIMENT  where review_id = $1'
    }
};

module.exports = {QUERIES};