
-----------------------------------------------------------------------------------------------------
┌───────────┐ ┌───┐   ┌───┐  ┌───────────┐ ┌───┐   ┌───┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
|           | |   |   |   |  |           | |   |   |   | |           | |           | |   ┌───┐   |
|   ┌──┐    | |   |   |   |  |           | |   └───┘   | |   ┌───────┘ |           | |   |   |   |
|   |  |    | |   |   |   |  |   ┌───────┘ |           | |   └───────┐ |   ┌───┐   | |   |   |   |
|   └──┘    | |   |   |   |  |   |         |   ┌───┐   | |   ┌───────┘ |   └───┘   | |   |   |   |
|           | |   └───┘   |  |   |         |   |   |   | |   |		   |   ┌─┐  ┌──┘ |   |   |   |
|         ┌─┘ |           |  |   |         |   |   |   | |   |         |   | |  |    |   └───┘   |
|   ┌─────┘   |           |  |   └───────┐ |   |   |   | |   |         |   | |  |    |           |
|   |         |           |  |           | |   |   |   | |   └───────┐ |   | |  |    |           |
└───┘         └───────────┘  └───────────┘ └───┘   └───┘ └───────────┘ └───┘ └──┘    └───────────┘
-----------------------------------------------------------------------------------------------------


************************************************************

************* Bienvenido al juego El Pucherín  *************

*************---------Reglas---------***********************
************************************************************


Hay un máximo de 5 jugadores. El más joven empieza, los turnos seguirán hacia la derecha.

Disponemos de un puchero central, dos dados (6 caras) y peones, que se reparten entre todos los jugadores.

En cada turno, el jugador tirará los dados.
La suma de ambos dados da como resultado la casilla donde se colocará el peon. Si la tirada da como resultado una casilla sin huecos libres, el jugador se llevará todos los peones de esa casilla.


Si el numero de los dados es 12, ¡enhorabuena! acabas de ganar todas las fichas del puchero central.
El juego termina cuando los jugadores no tienen fichas que colocar, si en la última tirada el resultado ha sido 12, el jugador se llevará también el resto de fichas que haya sobre el tablero. ¡Gana el jugador con más fichas!



************************************************************
*************-----Funcionamiento-----***********************
************************************************************

Este programa está compuesto por un archivo index.html, donde se muestra de forma dinámica el tablero del juego,
independientemente del modo al que queramos jugar (texto/grafico).


Contiene un archivo style.css, que contiene los estilos básicos de la página.

Un fichero de clases; game.js.

Dichas clases son las siguientes:
	-Tablero: empleada para dibujar el tablero elegido, texto o gráfico, y para mostrar las instrucciones 
	 del juego.
	 	Constructor básico.
	 	Función dibujar(), dibuja el tablero gráfico.
	 	Función dibujarTexto(casillas), recibe las casillas del tablero, para poder mostrarlas en pantalla.
	 	Función instrucciones(), muestra cómo se juega al juego con un sonido de fondo.

	 -Jugador: empleada para identificar a cada uno de los jugadores y llevar un control de fichas
	 	Constructor básico.
	 	Función sencillos, toString para verificar el objeto, getter y setter de algunos atributos y 
	 		operaciones con las fichas.

	 -Juego: empleada para el funcionamiento lógico del juego
	 	Constructor que recibe el tipo de juego, grafico o texto, inicializa las casillas, el tipo de juego,
	 		define el puchero central y las casillas y asigna las fichas totales.

	 	Función para establecer jugadores, recibe un array de jugadores, inicializa el atributo jugadores
	 		y reparte entre todos las fichas con la función correspondiente.
	 	Función para rotar los jugadores dentro del array (control de turnos).
	 	Función de turno, esta función lleva la dirección del juego, cuando se pulsa en el boton para
	 		tirar los dados, se llama a esta funcion para realizar todas las operaciones del turno;
	 		asignar peon a casilla, restar del jugador, verificar casilla vacia/llena, si esta
	 		llena se lleva los peones, etc.
	 	Función seguirJugando(), para verificar que no haya ningun jugador sin fichas y, si lo hay, se indica
	 		para finalizar el juego.
	 	Función quienGana(), para encontrar al ganador, tambien realiza una tirada rápida correspondiente al
	 		jugador que quedó sin fichas.


Se emplean alertas personalizadas para el seguimiento de la partida, éstas informan del jugador al que le toca jugar, las fichas que posee y su tirada en los dados.



algunos recursos empleados: 
https://www.dafont.com/es/new.php
https://suwalls.com/cartoons/looney-tunes-41497
sweetAlert2