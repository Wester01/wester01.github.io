const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};

Swal.fire({
	title: "-AVISO- La versión normal aún está en desarrollo.",
	text:"La versión de texto está completa.",
	icon:"warning"
});


function limpiarPantalla(){
	let pantalla = document.getElementById('pantalla');
	pantalla.classList.add("fuera");
}

async function peticionJugadores(){
	return jugadores = await Swal.fire({
			title:'Número de jugadores (máx 5):',
			input:'number',
			inputAttributes:{
				maxLength:1,
				required:true,
				min:1,
				max:5
			}
		});
}

function jugar(totalJugadores, tipo){//entra un numero y el tipo de tablero

		const juego = new Juego(tipo);
		let casillas = juego.casillas;
		let tablero = new Tablero();
		if(tipo === 'texto'){
			var boton = tablero.dibujarTexto(casillas);
		}else{
			var botonG = tablero.dibujar();
		}
		
		
		
		let grupoAux = [];
		let ganador = false;

		for(let i = 0; i<totalJugadores;i++){
			
			grupoAux.push(new Jugador());
			grupoAux[i].setId(i+1);
			grupoAux[i].setFichas(0);
			

		}
		
		juego.setJugadores(grupoAux);
		juego.repartoFichas();
	
		let welcome = true;
		if(welcome){
			let sonidoWelcome = cargarSonido('script/electricity-presentation.wav');
			sonidoWelcome.play();
			Swal.fire({
				title: `Empieza el juego.`,
				text:`Juega el jugador ${juego.jugadores[0].id}, fichas actuales: ${juego.jugadores[0].fichas}`,
				timer:2000
			});
			let jugadorInicial = document.getElementById("turno_jugador");
			let fichasInicial = document.getElementById("fichas_jugador");
			jugadorInicial.innerText = "Jugador 1";
			fichasInicial.innerText = `Fichas: ${Math.floor(50/totalJugadores)}`;
			welcome = false;
		}
		if(tipo === 'texto'){
			boton.addEventListener('click',()=>{
				//cada pulsación es un turno, por lo que la funcion turno no estaria mal que haga todo eso de
				//asignar los peones segun el numero que sale y tal
				//ver si hay ganador:
				let con = juego.seguirJugando();
				con = con.find(elem => elem === 'no');
				
				if(typeof con === 'undefined'){
					let sonido = cargarSonido("script/tio.wav");
					sonido.play();
					juego.jugarTurno();	
			  	}else{

					ganador = juego.quienGana(casillas,juego.jugadores);
				  	let sonidoVic = cargarSonido('script/sfx-victory1/sfx-victory1.mp3');
				  	sonidoVic.play();
				 	Swal.fire({
					title:`¡El ganador es el jugador ${ganador.id} con un total de ${ganador.fichas} peones!`,
					text:`¡Enhorabuena! Gracias por jugar, espero que te haya gustado.`
					}).then(()=>{ 

				  		location.reload()

				  	});
				}		  	
				
			});
		}else{
			botonG.addEventListener('click',()=>{
				//cada pulsación es un turno, por lo que la funcion turno no estaria mal que haga todo eso de
				//asignar los peones segun el numero que sale y tal
				//ver si hay ganador:
				let con = juego.seguirJugando();
				con = con.find(elem => elem === 'no');
				
				if(typeof con === 'undefined'){
					let sonido = cargarSonido("script/tio.wav");
					sonido.play();
					juego.jugarTurno();	
			  	}else{

					ganador = juego.quienGana(casillas,juego.jugadores);
				  	let sonidoVic = cargarSonido('script/sfx-victory1/sfx-victory1.mp3');
				  	sonidoVic.play();
				 	Swal.fire({
					title:`¡El ganador es el jugador ${ganador.id} con un total de ${ganador.fichas} peones!`,
					text:`¡Enhorabuena! Gracias por jugar, espero que te haya gustado.`
					}).then(()=>{ 

				  		location.reload()

				  	});
				}		  	
				
			});
		}
		
}

const JUGAR = document.getElementById("jugar");
const JUGAR_TEXTO = document.getElementById("jugar_texto");
const INSTRUCCIONES = document.getElementById("instrucciones");

JUGAR.addEventListener('click',()=>{
	/*let sonidoError = cargarSonido("script/nodisponible.wav");
	sonidoError.play();
	Swal.fire({
		title:"No disponible en este momento.",
		icon:"error",
		toast:true,
		position:"center"
	});*/

	
	limpiarPantalla();
	peticionJugadores().then((result)=>{

		jugar(result.value,'grafico');
		

	});
});


INSTRUCCIONES.addEventListener('click',()=>{
	let sonidoManual = cargarSonido('script/intro.wav');
	sonidoManual.play();
	let tablero = new Tablero();
	tablero.instrucciones();
});

JUGAR_TEXTO.addEventListener('click',()=>{
	
	limpiarPantalla();
	peticionJugadores().then((result)=>{
		//console.log(result.value)
		jugar(result.value,'texto');

	});
});
