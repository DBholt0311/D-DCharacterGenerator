-- create db called "character_generator"

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "email" VARCHAR (80)
);

CREATE TABLE "characters" (
    "id" SERIAL PRIMARY KEY,
    "character_name" VARCHAR (15),
    "class" VARCHAR,
    "level" INT,
    "background" VARCHAR,
    "race" VARCHAR,
    "alignment" VARCHAR,
    "experience_points" BIGINT,
    "Strength" INT,
    "dexterity" INT,
    "constitution" INT,
    "intelligence" INT,
    "wisdom" INT,
    "charisma" INT,
    "hit_points" INT,
    "user_id" BIGINT
);

