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

CREATE TABLE "races" (
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR (15)
);

CREATE TABLE "classes" (
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR (15)
);

CREATE TABLE "backgrounds" (
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR (15)
);

INSERT INTO "characters" ("character_name", "class", "level", "background", "race", "alignment", "experience_points", "Strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "hit_points", "user_id"
)
VALUES ('claude','ranger', 1, 'scholar', 'human', 'lawfull good', 0, 11, 12, 13, 14, 15, 17, 10, 1),
('smeagle','barbarian', 1, 'scholar', 'human', 'lawfull good', 0, 11, 12, 13, 14, 15, 17, 10, 3);

INSERT INTO "races" ("name")
VALUES ('dragonborn'),
('dwarf'),
('elf'),
('gnome'),
('half-elf'),
('halfling'),
('half-orc'),
('human'),
('tiefling');

INSERT INTO "classes" ("name")
VALUES ('barbarian'),
('bard'),
('cleric'),
('druid'),
('fighter'),
('monk'),
('paladin'),
('ranger'),
('rogue'),
('sorcerer'),
('warlock'),
('wizard');

INSERT INTO "backgrounds" ("name")
VALUES ('acolyte'),
('criminal'),
('folk hero'),
('nobel'),
('sage'),
('soldier');
