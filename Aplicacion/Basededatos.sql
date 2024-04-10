-- Crear la tabla de Usuarios
CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Crear la tabla de Cartas
CREATE TABLE IF NOT EXISTS Card (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    attack INT,
    defense INT,
    effect VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS Deck (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS Deck_Card (
    deck_id INT,
    card_id INT,
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