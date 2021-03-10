
function mostrar() {
	let seguir;
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let acumsueldoP = 0;
	let contP = 0;
	let acumsueldoA = 0;
	let contA = 0;
	let acumsueldoQ = 0;
	let contQ = 0;
	let promedioA;
	let promedioP;
	let promedioQ;
	let flagmaxsueldo = 1;
	let sueldomax;
	let sexosueldomax;
	let sueldofemmax;
	let flagsueldofemmax = 1;
	let nombresueldofemmax;
	let contPNB = 0;

	do {
		nombre = prompt('ingrese su nombre: ');
		edad = parseInt(prompt('ingrese su edad: '));
		while (edad < 1 || isNaN(edad)) {
			edad = parseInt(prompt('error. ingrese su edad: '));
		}
		sexo = prompt('ingrese su sexo (femenino, masculino, no binario');
		while (sexo != 'femenino' && sexo != 'masculino' && sexo != 'no binario') {
			sexo = prompt('ingrese su sexo (femenino, masculino, no binario');
		}
		puesto = prompt('ingrese su puesto (programador, analista, Qa)');
		while (puesto != 'programador' && puesto != 'analista' && puesto != 'Qa') {
			puesto = prompt('ingrese su puesto (programador, analista, Qa');
		}
		sueldo = parseInt(prompt('ingrese su sueldo: (entre 15000 y 70000) '));
		while (sueldo < 15000 || sueldo > 70000 || isNaN(edad)) {
			sueldo = parseInt(prompt('error. ingrese su sueldo (entre 15000 y 70000) '));
		}
		switch (puesto) {
			case 'programador':
				contP++;
				acumsueldoP += sueldo;
				break;
			case 'analista':
				contA++;
				acumsueldoA += sueldo;
				break;
			case 'Qa':
				contQ++;
				acumsueldoQ += sueldo;
				break;
		}
		if (flagmaxsueldo || sueldo > sueldomax) {
			sueldomax = sueldo;
			sexosueldomax = sexo;
			flagmaxsueldo = 0;
		}
		if (sexo == 'femenino' && (flagsueldofemmax || sueldo > sueldofemmax)) {
			sueldofemmax = sueldo;
			nombresueldofemmax = nombre;
			flagsueldofemmax = 0;
		}
		if ((puesto == 'programador' && sexo == 'no binario') && (sueldo >= 20000 && sueldo <= 55000)) {
			contPNB++;
		}
		seguir = prompt('desea ingresar otro empleado?');
	} while (seguir == 'si');
	promedioP = acumsueldoP / contP;
	if (contP == 0) {
		promedioP = 0;
	}
	promedioA = acumsueldoA / contA;
	if (contA == 0) {
		promedioA = 0;
	}
	promedioQ = acumsueldoQ / contQ;
	if (contQ == 0) {
		promedioQ = 0;
	}

	//a) promedio de sueldos para cada puesto
	console.log('el promedio para el puesto de programador es: ' + promedioP + ', para analista: ' + promedioA + ' y para Qa: ' + promedioQ);
	//b) el sexo del que percibe el mayor sueldo
	console.log('el sexo del que percibe el mayor sueldo es: ' + sexosueldomax + ' con un sueldo de ' + sueldomax);
	//c) el nombre del empleado femenino con mas sueldo
	if (flagsueldofemmax == 0) {
		console.log('el nombre del empleado femenino con mas sueldo es: ' + nombresueldofemmax + ' con un sueldo de ' + sueldofemmax);
	} else {
		console.log('no se ingresaron empleados femeninos.');
	}
	//d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 */
	if (contPNB > 0) {
		console.log('cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000  es: ' + contPNB);
	} else {
		console.log('no se ingresaron programadores no binarios que cobran sueldos entre 20000 y 55000');
	}

}//fin de la funcion.