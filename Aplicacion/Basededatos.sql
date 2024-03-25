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

-- Crear la tabla de Mazos
CREATE TABLE IF NOT EXISTS Deck (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

-- La tabla de Cartas_Mazos para manejar la relación muchos a muchos entre Cartas y Mazos
CREATE TABLE IF NOT EXISTS Deck_Card (
    deck_id INT,
    card_id INT,
    PRIMARY KEY (deck_id, card_id),
    FOREIGN KEY (deck_id) REFERENCES Deck(id),
    FOREIGN KEY (card_id) REFERENCES Card(id)
);

-- Crear la tabla de Juegos
CREATE TABLE IF NOT EXISTS Game (
    id INT AUTO_INCREMENT PRIMARY KEY,
    result VARCHAR(255),
    move_reg TEXT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

-- Crear la tabla de Juegos Guardados
CREATE TABLE IF NOT EXISTS SavedGame (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id INT,
    user_id INT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (game_id) REFERENCES Game(id),
    FOREIGN KEY (user_id) REFERENCES User(id)
);

-- La tabla de Amistades para manejar la relación muchos a muchos entre Usuarios
CREATE TABLE IF NOT EXISTS Friendship (
    user_id1 INT,
    user_id2 INT,
    PRIMARY KEY (user_id1, user_id2),
    FOREIGN KEY (user_id1) REFERENCES User(id),
    FOREIGN KEY (user_id2) REFERENCES User(id)
);