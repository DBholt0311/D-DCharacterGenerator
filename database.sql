CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "classes" (
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR (15),
    "hit_die" INT,
    "description" VARCHAR,
    "icon_url" VARCHAR,
    "portrait_url" VARCHAR
);

INSERT INTO "classes" ("name", "hit_die", "description", "icon_url", "portrait_url")
VALUES
('Barbarian', 'One of the primary meat shield classes, barbarians are marked by their speed and their ability to rage, boosting their power and toughness. Barbarians rely on high HP to survive combat rather than heavy armor.'),
('Bard', 'Often highlighted as the classic 5th wheel class, a bard has some arcane casting ability, significant skill ability (especially social skills), can wear some armor, and has some combat skill. They are also able to use their musical abilities to assist their comrades. If built correctly, bards can fill almost any party role.'),
('Cleric', 'Clerics are divine casters and some of the strongest healers in the game. They can also wear heavy armor and have substantial buffing capability and can serve as a meat shield.'),
('Druid', 'Druids are divine casters focused on the power of nature. They can heal (though not quite as well as clerics), buff, summon allies, and deal damage. They also have the ability to assume the forms of various animals, giving them substantial combat abilities and enabling them to serve as meat shields.'),
('Fighter', 'Perhaps the archetypal meat shield class, a fighter has high BAB, high hit points, and access to all types of armor. They have the ability to customize their fighting style and become skilled in a number of types of combat.'),
('Monk', 'Monks are mobile fighters who rely on unarmed combat. They gain a number of abilities related to this role and have perhaps the highest saves in the game. They also excel at skills related to movement and acrobatics. However, they aren’t quite tough enough to fill the meat shield role and are perhaps best suited to the 5th wheel or skill monkey role.'),
('Paladin', 'Holy warriors whose skills are powered by their faith, paladins are formidable combatants well able to fill the meat shield role. Their limited healing abilities give them staying power in addition to their more conventional defenses. They gain the ability to smite evil foes, making them especially skilled at combating evil.'),
('Ranger', 'Rangers are martial characters focused on wilderness environs. They gain many druid-like abilities to interact with nature and excel at tracking and fighting on the move, especially when fighting their favored enemies. They have significant skill ability and can chose to focus on ranged combat or fighting with a blade in each hand. They also gain very limited divine spellcasting ability.'),
('Rogue', 'Perhaps the archetypal skill monkey class, rogues have unparalleled access to skills and are the only standard class with the ability to disarm traps. They can also be formidable combatants, especially when fighting distracted or surprised foes.'),
('Sorcerer', 'Sorcerers are powerful arcane casters, though they have little conventional combat ability. They gain their magic through innate talent and have access to a limited number of spells that they can cast whenever they want (within limits).'),
('Wizard', 'Wizards gain their arcane power through study and knowledge. They carry ponderous books of spells and must prepare each spell they cast at the beginning of the day. They have access to more spells than a sorcerer and are generally more versatile, but they can cast fewer spells per day and are limited by the spells they choose to prepare in the morning.');

CREATE TABLE "races" (
    "id" SERIAL PRIMARY KEY,
	"name" VARCHAR (15),
    "description" VARCHAR,
    "portrait_url" VARCHAR
);

INSERT INTO "races"("name","description")
VALUES
('Human', 'The baseline race, Humans are adaptable and can be a good choice for almost any character.'),
('Dwarf', 'Dwarves are tough but gruff and slower than other races.'),
('Elf', 'Elves are graceful and quick but less hardy than other races.'),
('Gnome', 'Gnomes are small and tough but not as strong as other races. THey have some simple magical abilities and an affinity for illusions. THey are also slower than larger races.'),
('Half-Elf', 'Existing between elven and human worlds, half-elves are consummate diplomats with some traits from both thier human and elven heritage.'),
('Half-Orc', 'Half-Orcs are strong but not as intelligent or charismatic as other races.'),
('Halflings', 'Halflings are agile and dexterous but not as strong or fast as larger races. They excel at stealth and acrobatics');

CREATE TABLE "characters" (
    "id" SERIAL PRIMARY KEY,
	"character_name" VARCHAR (15),
    "class" VARCHAR,
    "level" INT,
    "background" VARCHAR,
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