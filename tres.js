function mostrar() {
	let seguir;
	let nombre;
	let cantLamp;
	let marca;
	let precio;
	let preciobruto = 0;
	let acumAL = 0;
	let acumFL = 0;
	let acumIL = 0;
	let contFL = 0;
	let contIL = 0;
	let contAL = 0;
	let descuento = 0;
	let perdidas;
	let promedioFL;
	let promedioAL;
	let promedioIL;
	let marcamax;
	do {
		nombre = prompt('ingrese su nombre: ');
		cantLamp = parseInt(prompt('ingrese su cantidad de lamparas: '));
		while (cantLamp < 1 || isNaN(cantLamp)) {
			cantLamp = parseInt(prompt('error. ingrese su cantidad de lamparas: '));
		}
		marca = prompt('ingrese la marca (felipe lamparas, argentina luz, illuminatis)');
		while (marca != 'felipe lamparas' && marca != 'argentina luz' && marca != 'illuminatis') {
			marca = prompt('error. ingrese la marca (felipe lamparas, argentina luz, illuminatis)');
		}
		precio = parseInt(prompt('ingrese el precio por unidad: '));
		while (precio < 1 || isNaN(precio)) {
			precio = parseInt(prompt('error. ingrese el precio por unidad: '));
		}
		switch (marca) {
			case 'felipe lamparas':
				acumFL += cantLamp;
				contFL++;
				break;
			case 'argentina luz':
				acumAL += cantLamp;
				contAL++;
				break;
			case 'illuminatis':
				acumIL += cantLamp;
				contIL++;
				break;
		}

		preciobruto += (precio * cantLamp);
		seguir = prompt('desea ingresar otra compra?');
	} while (seguir == 'si');
	if (marca == 'felipe lamparas' && acumFL > 5) {
		descuento += 10;
	}
	if (marca == 'argentina luz' && acumAL >= 3) {
		descuento += 5;
	}
	perdidas = preciobruto * descuento / 100;
	if (descuento == 0) {
		perdida = 0;
	}
	promedioFL = acumFL / contFL;
	if (contFL == 0) {
		promedioFL = 0;
	}
	promedioAL = acumAL / contAL;
	if (contAL == 0) {
		promedioAL = 0;
	}
	promedioIL = acumIL / contIL;
	if (contIL == 0) {
		promedioIL = 0;
	}
	if (contFL > contAL && contFL > contIL) {
		marcamax = 'felipe lamparas';
	} else if (contFL <= contAL && contAL > contIL) {
		marcamax = 'argentina luz';
	} else {
		marcamax = 'illuminatis';
	}

	//a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
	console.log('la empresa recauda en concepto de todas las ventas realizadas: $' + preciobruto);
	//b) Cuanto "perdio" la empresa en concepto de descuentos.
	console.log('la empresa "perdio" en concepto de descuentos: $' + perdidas);
	//c) El promedio de la cantidad de lamparas vendidas de cada marca.
	console.log('El promedio de la cantidad de lamparas vendidas de argentina luz: ' + promedioAL + ' de felipe lamparas: ' + promedioFL + ' y de illuminatis: ' + promedioIL);
	//d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
	console.log('La marca que mas ventas realizo es: ' + marcamax);

}//fin de la funcion
