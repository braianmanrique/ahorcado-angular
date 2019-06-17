import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
	palabra = 'AGUACATE';
	palabraOculta = '';
	intentos = 0;

 	letras = ['A','B','C','D','E','F','G','H','I','J',
 			'K','L','M','N','Ñ','O','P','Q','R','S',
 			'T','U','V','W','X','Y','Z'];

 	gano = false;
 	perdio = false;

  constructor(){
  		this.palabraOculta = '_ '.repeat(this.palabra.length)
  }

  comprobar(letra){

  	this.existeLetra(letra)

  	const palabraOcultaArr = this.palabraOculta.split(' ') 

  	for(let i=0; i < this.palabra.length ; i++){
  		if (this.palabra[i] === letra) {
  			// code...
  			palabraOcultaArr[i] = letra;
  		}
  	}
  	this.palabraOculta = palabraOcultaArr.join(' ');
  	this.verificaGane()
  }

  verificaGane(){
  	console.log(this.palabraOculta)
  	const palabraArr = this.palabraOculta.split(' ')

  	const palabraEvaluar = palabraArr.join('');
  	console.log(palabraEvaluar)

  	if (palabraEvaluar === this.palabra) {
  		// code...
  		this.gano= true;
  		console.log('El usuario ha ganado')
  	}

  	if(this.intentos >= 9){
  		this.perdio = true;
  		console.log('El usuario perdio')
  	}

  }


  existeLetra(letra){
  	if(this.palabra.indexOf(letra) >= 0){
  		//Encontro la letra
  		//console.log('Si existe la letra :' + letra)
  	}else{
  		// No encontro la letra
  		//console.log('No existe la letra: '+ letra)
  		this.intentos ++;
  	}
  }

}
