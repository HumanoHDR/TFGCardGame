CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Effect (
    id int AUTO_INCREMENT PRIMARY KEY,
    effect_description varchar(255),
    doncost int,
    deaddon int,
    effect varchar(12)
);

CREATE TABLE IF NOT EXISTS Card (
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(100),
    rarity VARCHAR(50),
    cost INT,
    power INT,
    attribute VARCHAR(100),
    counter INT,
    color VARCHAR(50),
    arc_1 VARCHAR(100),
    arc_2 VARCHAR(100),
    arc_3 VARCHAR(100),
    effect_1 VARCHAR(255),
    effect_2 VARCHAR(255),
    FOREIGN KEY (effect_1) REFERENCES Effect(id)
    FOREIGN KEY (effect_2) REFERENCES Effect(id)
);

CREATE TABLE IF NOT EXISTS Deck (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS Deck_Card (
    deck_id INT,
    card_id varchar(12),
    PRIMARY KEY (deck_id, card_id),
    FOREIGN KEY (deck_id) REFERENCES Deck(id),
    FOREIGN KEY (card_id) REFERENCES Card(id)
);

CREATE TABLE IF NOT EXISTS `Game` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `Result` VARCHAR(255) NOT NULL,
    `MoveReg` TEXT,
    `Date` DATETIME NOT NULL,
    `User_id` INT,
    `Favorite` BOOLEAN,
    FOREIGN KEY (`User_id`) REFERENCES `User`(`id`)
);

CREATE TABLE IF NOT EXISTS Friendship (
    user_id1 INT,
    user_id2 INT,
    PRIMARY KEY (user_id1, user_id2),
    FOREIGN KEY (user_id1) REFERENCES User(id),
    FOREIGN KEY (user_id2) REFERENCES User(id)
);