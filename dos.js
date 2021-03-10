function mostrar() {
    let nombre;
    let edad;
    let sexo;
    let carrera;
    let materias;
    let notapromedio;
    let mayorpromfisica;
    let nombremayorpromfisica;
    let flagmayorpromfisica = 1;
    let nombrejoven;
    let edadjoven;
    let flagjoven = 1;
    let contF = 0;
    let contQ = 0;
    let contS = 0;
    let promedioF;
    let promedioQ;
    let promedioS;
    let totalaumnos;
    let edadMasMaterias;
    let nombreMasMaterias;
    let flagMasMaterias = 1;
    let materiasmax;

    for (i=0; i < 500; i++) {

        nombre = prompt('ingrese su nombre: ');
        edad = parseInt(prompt('ingrese su edad: '));
        while (edad < 1 || isNaN(edad)) {
            edad = parseInt(prompt('error. ingrese su edad: '));
        }
        sexo = prompt('ingrese su sexo (femenino, masculino, no binario');
        while (sexo != 'femenino' && sexo != 'masculino' && sexo != 'no binario') {
            sexo = prompt('ingrese su sexo (femenino, masculino, no binario');
        }
        carrera = prompt('ingrese su carrera (quimica, fisica, sistemas)');
        while (carrera != 'quimica' && carrera != 'fisica' && carrera != 'sistemas') {
            carrera = prompt('ingrese su carrera (quimica, fisica, sistemas');
        }
        materias = parseInt(prompt('ingrese su cantidad de materias (entre 1 y 5)'));
        while (materias < 1 || materias > 5 || isNaN(materias)) {
            materias = parseInt(prompt('error. ingrese su cantidad de materias (entre 1 y 5)'));
        }
        notapromedio = parseFloat(prompt('ingrese su promdio de nota (entre 0 y 10)'));
        while (notapromedio < 1 || isNaN(notapromedio)) {
            notapromedio = parseFloat(prompt('error. ingrese su promdio de nota (entre 0 y 10)'));
        }
        if (carrera == 'fisica' && (flagmayorpromfisica || notapromedio > mayorpromfisica)) {
            mayorpromfisica = notapromedio;
            nombremayorpromfisica = nombre;
            flagmayorpromfisica = 0;
        }
        if (sexo == 'femenino' && (flagjoven || edad < edadjoven)) {
            edadjoven = edad;
            nombrejoven = nombre;
            flagjoven = 0;
        }
        switch (carrera) {
            case 'fisica':
                contF++;
                break;
            case 'quimica':
                contQ++;
                break;
            case 'sistemas':
                contS++;
                break;
        }
        if (carrera != 'quimica' && (flagMasMaterias || materias > materiasmax)) {
            materiasmax = materias;
            nombreMasMaterias = nombre;
            edadMasMaterias = edad;
            flagMasMaterias = 0;
        }


    }//fin del bucle
    totalaumnos = contF + contQ + contS;
    promedioF = contF * 100 / totalaumnos;
    if (contF == 0) {
        promedioF = 0;
    }
    promedioS = contS * 100 / totalaumnos;
    if (contS == 0) {
        promedioS = 0;
    }
    promedioQ = contQ * 100 / totalaumnos;
    if (contQ == 0) {
        promedioQ = 0;
    }


    //a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
    if (flagmayorpromfisica == 0) {
        console.log('El nombre del mejor promedio de los alumnos que estudian Fisica es: ' + nombremayorpromfisica);
    } else {
        console.log('no se ingresaron alumnos que estudien fisica.');
    }
    //b) El nombre de la alumna mas joven.
    if (flagjoven == 0) {
        console.log('El nombre de la alumna mas joven es: ' + nombrejoven);
    } else {
        console.log('no se ingresaron alumnas femeninas.');
    }
    //c) Porcentaje de estudiantes que estudia cada carrera.
    console.log('Porcentaje de estudiantes que estudia FISICA es: ' + promedioF + '%, el porcentaje de QUIMICA es: ' + promedioQ + '%, y el de SISTEMAS es: ' + promedioS + '%.');
    //d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
    if (flagMasMaterias == 0) {
        console.log('el nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica es: ' + nombreMasMaterias + ' y tiene ' + edadMasMaterias + 'años.');
    } else {
        console.log('no se ingresaron alumnos que no estudien la carrera Quimica.');
    }

}//fin de la funcion