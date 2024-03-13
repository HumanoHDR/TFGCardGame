# TFGCardGame
Juego de cartas creado como proyecto final de grado

UML:
**Entidades Principales**
    Usuario: Representa a las personas que usan la aplicación.
    Carta: Representa cada carta del juego, con sus atributos y habilidades.
    Mazo: Colección de cartas seleccionadas por un usuario para jugar.
    Partida: Representa una sesión de juego entre dos usuarios.
    Torneo: Un conjunto de partidas organizadas en una estructura competitiva. (Opcional)
**Relaciones**
    Un Usuario puede tener varios Mazos.
    Un Mazo contiene varias Cartas.
    Una Partida involucra dos Usuarios y sus respectivos Mazos.
    Un Torneo contiene múltiples Partidas.(Opcional)
**Atributos Básicos**
    Usuario: Nombre, ID de usuario, Correo electrónico, Mazos.
    Carta: ID de Carta, Nombre, Tipo, Ataque, Defensa, Efecto.
    Mazo: ID de Mazo, Usuario, Cartas, Nombre del Mazo.
    Partida: ID de Partida, Usuario 1, Usuario 2, Resultado, Registro de Movimientos.
    Torneo: ID de Torneo, Participantes, Partidas, Ganador. (Opcional)
**Operaciones Básicas**
    Usuario: Crear cuenta, Iniciar sesión, Crear mazo, Unirse a torneo.
    Carta: Crear carta, Modificar carta, Ver detalles.
    Mazo: Crear mazo, Editar mazo, Seleccionar para partida.
    Partida: Iniciar partida, Realizar movimiento, Finalizar partida.
    Torneo: Crear torneo, Inscribirse en torneo, Avanzar rondas. (Opcional)
