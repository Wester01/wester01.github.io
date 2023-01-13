class Tablero {
  // Constructor
  constructor() {
  }

  // Método para dibujar el tablero
  dibujar() {
    // Código para dibujar el tablero (por ejemplo, crear elementos HTML y añadir estilos)
    
  	let pantalla = document.querySelector('#tablero');
  	let marcoDerecho = document.querySelector('#marcoDerecho');
  	let img = document.createElement('img');
  	img.setAttribute("class","img-fluid");
  	img.setAttribute("src","img/diseñoTableroFinal.png");

  	marcoDerecho.classList.toggle('fuera');
  	pantalla.classList.toggle('fuera');
  	pantalla.appendChild(img);

  	let boton = document.getElementById("tirarDado");
  	boton.setAttribute("type","button");
  	console.log(boton)
  	return boton;
  }

  dibujarTexto(casillas){
  	
  	let zonaDeJuego = document.getElementById("juego");
  	zonaDeJuego.style = "display:flex; flex-direction: row; flex-wrap:wrap; justify-content:center;";
  	let tituloTablero = document.createElement("h1");
  	tituloTablero.innerText = "Bienvenido a El Pucherín";
  	tituloTablero.style = "margin-top:3%; width:100%; text-align:center;";
  	zonaDeJuego.appendChild(tituloTablero);

    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    

    casillas.forEach((casilla)=>{
    	//una fila por casilla
			let hilera = document.createElement("tr");
			//dos celdas por fila
			let celda = document.createElement("td");
	    let celda2 = document.createElement("td");
	    celda2.setAttribute("id",casilla['id']);
	    //texto de cada celda
	    let textoCelda = document.createTextNode(`Casilla ${casilla['huecos']}`);
	    let textoCelda2 = document.createTextNode(`Fichas ${casilla['fichas']}`);
	      
	    celda.appendChild(textoCelda);
	    celda2.appendChild(textoCelda2);
	    hilera.appendChild(celda);
	    hilera.appendChild(celda2);

	    tblBody.appendChild(hilera);
    });
    let hileraTemp = document.createElement("tr");
    let puchero = document.createElement("td");
    let fichasPuchero = document.createElement("td");

    let textoPuchero = document.createTextNode(`7 PUCHERO 7`);
	  let textoFichasPuchero = document.createTextNode(`Fichas: 0`);

	  puchero.appendChild(textoPuchero);
	  fichasPuchero.appendChild(textoFichasPuchero);
	  fichasPuchero.setAttribute("id",7);
    hileraTemp.appendChild(puchero);
    hileraTemp.appendChild(fichasPuchero);
    hileraTemp.style = "background-color:yellow;";
    tblBody.appendChild(hileraTemp);

    tabla.appendChild(tblBody);
    tabla.classList.add("tableroTexto");

    zonaDeJuego.appendChild(tabla);

    let contenedorBoton = document.createElement("div");
    let boton = document.createElement("button");
    boton.setAttribute("type","button");
    boton.setAttribute("id","tirarDado");
    boton.innerText = "Tirar los dados";
    boton.classList.add("btn-secondary");
    

    contenedorBoton.classList.add("botonTexto");
    contenedorBoton.appendChild(boton);

    zonaDeJuego.appendChild(contenedorBoton);
		return boton;
    
  }


  instrucciones(){
  	Swal.fire({
		  title: '¡Bienvenido a El Pucherín!',
		  text: 'A continuación se muestra un manual paso a paso de cómo jugar.',
		  confirmButtonText: '¡Perfecto!'
		}).then(()=>{
			Swal.fire({
			  	title:'Primero, tenemos que saber cuántos vamos a jugar.',
			  	text:'Hay un máximo de 5 jugadores. El más joven empieza, los turnos seguirán hacia la derecha.',
			  	confirmButtonText:'Continuar'
			}).then(()=>{
				Swal.fire({
					title:'Disponemos de un puchero central,',
					text:'dos dados (6 caras) y peones, que se reparten entre todos los jugadores.',
					confirmButtonText:'Continuar'
				}).then(()=>{
					Swal.fire({
						title:'En cada turno, el jugador tirará los dados.',
						text:'La suma de ambos dados da como resultado la casilla donde se colocará el peon. Si la tirada da como resultado una casilla sin huecos libres, el jugador se llevará todos los peones de esa casilla.',
						confirmButtonText:'Continuar'
					}).then(()=>{
						Swal.fire({
							title:'Si el numero de los dados es 12, ¡enhorabuena! acabas de ganar todas las fichas del puchero central.',
							text:'El juego termina cuando los jugadores no tienen fichas que colocar, si en la última tirada el resultado ha sido 12, el jugador se llevará también el resto de fichas que haya sobre el tablero. ¡Gana el jugador con más fichas!',
							confirmButtonText:'¡A jugar!'
						})
					});
				});
			});	
		});
  }

}

class Jugador{
	static fichas = 0;
	static id = 0;
	

	consutructor(){

	}

	restarFichas(){
		this.fichas--;
	}

	sumarFichas(cantidad=0){
		if(!cantidad !== 0){
			this.fichas += cantidad;
		}else{
			this.fichas++;
		}
	}

	setFichas(fichas){
		this.fichas = fichas;
	}

	getFichas(){
		return this.fichas;
	}

	setId(id){
		this.id = id;
		this.imagen = `img/jugador${this.id}.png`;
	}

	toString(){
		console.log(`Jugador: fichas = ${this.fichas}, id = ${this.id}`);
	}

}

class Juego{
	// Variables de instancia
  static pucheroCentral;
  static jugadores = [];
  static casillas = [];

  constructor(tipo) {
    // Inicializar las variables de instancia
    this.continuarJugando = true;
    this.tipoJuego = tipo;
    this.pucheroCentral = {
	  	'id':7,
	  	'huecos':4,
	  	'fichas':0
		};
	//se definen las casillas del tablero
    this.casillas = [
    		{'huecos':2,'fichas':0,'id':2},
    		{'huecos':3,'fichas':0,'id':3},
    		{'huecos':4,'fichas':0,'id':4},
    		{'huecos':5,'fichas':0,'id':5},
    		{'huecos':6,'fichas':0,'id':6},
    		{'huecos':8,'fichas':0,'id':8},
    		{'huecos':9,'fichas':0,'id':9},
    		{'huecos':10,'fichas':0,'id':10},
    		{'huecos':11,'fichas':0,'id':11}
    ];

    this.fichasTotales = 50;
		this.bote = false;
  }
  //entra array de object
  setJugadores(grupoJugadores){
  	
		this.jugadores = grupoJugadores.slice();
		
  	this.repartoFichas();
  }
  //dado(){
  //	return Math.floor(Math.random()*(6-1+1)+1);
  //}

  repartoFichas(){
  	let cantidadFichas = Math.floor(this.fichasTotales / this.jugadores.length);
  	
  	this.jugadores.forEach((jugador)=>{
				if(jugador.hasOwnProperty("fichas")){
			  		jugador.setFichas(cantidadFichas);
			  }

  	});

  }

  rotarGrupoJugadores(){
  	let jugadorAuxiliar = this.jugadores.shift();
  	this.jugadores.push(jugadorAuxiliar);
  	
  }

  jugarTurno(){
  	//se tiran dos dados, se suma el valor, y se asigna un peon del jugador actual a la casilla
  	//que marca el dado, ese peon se resta del jugador
 
  	let dado1 = Math.ceil(Math.random() * 6);
  	let dado2 = Math.ceil(Math.random() * 6);
  	let posicion = (dado1+dado2)<=1 ? (dado1+dado2)+1 : (dado1+dado2) ;
  	this.dado1 = dado1;
  	this.dado2 = dado2;
  	//si sale 7, peon al puchero
  	if(posicion === 7){

  		this.pucheroCentral['fichas']++;
  		this.jugadores[0].restarFichas();
  		if(this.tipoJuego === 'texto'){
  			let pucheroHTML = document.getElementById('7');
  			pucheroHTML.innerText = `Fichas: ${this.pucheroCentral['fichas']}`;
  		}
  		

  	}else if(posicion === 12){
  		//si sale 12, te llevas el puchero
  		this.jugadores[0].sumarFichas(this.pucheroCentral['fichas']);
  		this.pucheroCentral['fichas'] = 0;
  		if(tipoJuego === 'texto'){
  			let pucheroHTML = document.getElementById('7');
  			pucheroHTML.innerText = `Fichas: ${this.pucheroCentral['fichas']}`;
  		}
  		this.bote = true;
  	}else{
  		this.bote = false;
  	}
  	
  	//calculo y colocacion de los peones
  	this.casillas.forEach((casilla)=>{

  		//cuando se encuentra la casilla a la que asignar los peones, se revisa que tenga espacio
  		//si tiene espacio, se le suma 1 a la cantidad de fichas y se le resta 1 al jugador
  		//si no tiene espacio, las fichas de casilla a 0 
  		//y el jugador recibe el numero de peones que hubiese
  		
  		if(casilla['id'] === posicion){
  			
		  	//gestion del peon
	  		if(casilla['fichas'] === casilla['huecos']){
	  			this.jugadores[0].sumarFichas(casilla['fichas']);
	  			casilla['fichas'] = 0;
	  		}else{
	  			this.jugadores[0].restarFichas();
	  			casilla['fichas']++;
	  		}
	  		
	  		if(this.tipoJuego === 'texto'){
			  	let destino = document.getElementById(posicion);
			  	destino.innerText = `Fichas: ${casilla['fichas']}`;
	  		}
  		} 
  	});
  	this.rotarGrupoJugadores();
  	//alerta cuando ganas el bote
  	if(this.bote){
  		Swal.fire({
  			title:`¡Enhorabuena! Has sacado ${posicion}, ¡te llevas el puchero!`,
	  		icon:'info',
	  		toast:true,
	  		timer:6000,
	  		timerProgressBar:true,
	  		position:'center'
	  	}).then(()=>{ this.bote = false; });
  		
  	}else{//info de tirada
  		Swal.fire({
	  		title:`Los dados marcan.... ¡ ${posicion} !`,
	  		icon:'info',
	  		toast:true,
	  		timer:6000,
	  		timerProgressBar:true,
	  		position:'center'
	  	}).then(()=>{
	  		
					Swal.fire({
						  title:`Siguiente turno: Jugador ${this.jugadores[0].id}, fichas actuales: ${this.jugadores[0].fichas}`,
						  icon:'info',
						  toast:true,
						  timer:6000,
						  timerProgressBar:true,
						  position:'center'
					});
					
	  	});

	  	if(this.tipoJuego === 'grafico'){
	  		let jugador = document.getElementById("turno_jugador");
	  		let fichas_jugador = document.getElementById('fichas_jugador');
	  		let img_jugador = document.getElementById("img_jugador");
	  		jugador.innerText = `Jugador ${this.jugadores[0].id}`;
	  		fichas_jugador.innerText = `Fichas: ${this.jugadores[0].fichas}`
	  		img_jugador.setAttribute("src",`img/jugador${this.jugadores[0].id}.png`);
	  	}
  		
  	}
  	
  	
  	
  }

  seguirJugando(){
  	let condicion = this.jugadores.map((jugador)=>{
  		if(jugador.fichas === 0){
  			return 'no';
  		}else{
  			return 'si';			
  		}
  	});

  	return condicion;
  }


  //el primer jugador que llegue a 0 fichas termina el juego
  quienGana(casillas,jugadores){
  	let fichasEnTablero = casillas.reduce((total,casilla)=> total + casilla.fichas , 0);
  	//si se da que un jugador tiene 0 fichas, tira el dado, si sale 12 se lleva el tablero	
  	let tiradaRapida = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
  	if(tiradaRapida <= 1){
  		tiradaRapida++;
  	}
		
  	jugadores.forEach((jugador)=>{
  		if(jugador.fichas === 0){
  			if(tiradaRapida === 12){
  				jugador.fichas += fichasEnTablero;
  			}else{
  				let casilla = casillas.find(casilla => casilla.hasOwnProperty('id') && casilla['id'] === tiradaRapida ? casilla: 0 );
  				jugador.fichas += casilla.fichas;
  			}
  		}
  	});

  	let aux;
  	for(let i = 0; i < this.jugadores.length - 1; i++){
  		if(jugadores[i].fichas < jugadores[i+1].fichas){
  			aux = jugadores[i+1];
  		}else{
  			aux = jugadores[i];
  		}
		}  	

		return aux;
	}
}