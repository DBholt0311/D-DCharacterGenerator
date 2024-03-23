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
	"name" VARCHAR (15),
    "hit_die" INT
);

CREATE TABLE "backgrounds" (
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR (15)
);

CREATE TABLE "ability_score" (
    "id" SERIAL PRIMARY KEY,
    "score" INT,
    "modifier" INT
);

INSERT INTO "characters" ("character_name", "class", "level", "background", "race", "alignment", "experience_points", "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma", "hit_points", "user_id"
)
VALUES ('claude','ranger', 1, 'scholar', 'human', 'lawful good', 0, 11, 12, 13, 14, 15, 17, 10, 1),
('smeagle','barbarian', 1, 'scholar', 'human', 'lawful good', 0, 11, 12, 13, 14, 15, 17, 10, 3);

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

INSERT INTO "classes" ("name", "hit_die")
VALUES ('barbarian', 12),
('bard', 8),
('cleric', 8),
('druid', 8),
('fighter', 10),
('monk', 8),
('paladin', 10),
('ranger', 10),
('rogue', 8),
('sorcerer', 6),
('warlock', 8),
('wizard', 6);

INSERT INTO "backgrounds" ("name")
VALUES ('acolyte'),
('criminal'),
('folk hero'),
('nobel'),
('sage'),
('soldier');

INSERT INTO "ability_score" ("score", "modifier")
VALUES (1, -5),
(2, -4),
(3, -4),
(4, -3),
(5, -3),
(6, -2),
(7, -2),
(8, -1),
(9, -1),
(10, 0),
(11, 0),
(12, 1),
(13, 1),
(14, 2),
(15, 2),
(16, 3),
(17, 3),
(18, 4),
(19, 4),
(20, 5);
