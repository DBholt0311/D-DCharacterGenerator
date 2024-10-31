CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "classes" (
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR (15),
    "hit_die" INT
);

INSERT INTO "classes" ("name", "hit_die")
VALUES
('Barbarian', 12),
('Bard', 6),
('Cleric', 8),
('Druid', 8),
('Fighter', 10),
('Monk', 8),
('Paladin', 10),
('Psion', 4),
('Psychic Warrior', 8),
('Ranger', 8),
('Rogue', 6),
('Sorcerer', 4),
('Soulknife', 10),
('Wilder', 6),
('Wizard', 4);

CREATE TABLE "races" (
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR (15),
    "strength" INT,
    "dexterity" INT,
    "constitution" INT,
    "wisdom" INT,
    "intelligence" INT,
    "charisma" INT
);

INSERT INTO "races"("name", "strength", "dexterity", "constitution", "wisdom", "intelligence", "charisma")
VALUES
('Human', 0, 0, 0, 0, 0, 0),
('Dwarf', 0, 0, 2, 0, 0, -2),
('Elf', 0, 2, -2, 0, 0, 0),
('Gnome', -2, 0, 2, 0, 0, 0),
('Half-Elf', 0, 0, 0, 0, 0, 0),
('Half-Orc', 2, 0, 0, 0, -2, -2),
('Halflings', -2, 2, 0, 0, 0, 0);

CREATE TABLE "characters" (
    "id" SERIAL PRIMARY KEY,
	"character_name" VARCHAR (15),
    "class" VARCHAR,
    "level" INT,
    "race" VARCHAR,
    "alignment" VARCHAR,
    "experience" INT,
    "strength" INT,
    "dexterity" INT,
    "constitution" INT,
    "intelligence" INT,
    "wisdom" INT,
    "charisma" INT,
    "hit_points" INT,
    "user_id" INT
);