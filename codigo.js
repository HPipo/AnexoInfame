//modelo de clase//

class goberInfame {
    constructor (dato) {
        this.id = dato.id;
        this.nombre = dato.nombre;
        this.tipoGob = dato.tipoGob;
        this.inicio = dato.inicio;
        this.fin = dato.fin;
        this.duracion = dato.duracion;
        this.gabinete = dato.gabinete;
    }
}

//arrays//

const ministerios = [
    ' Matías Sánchez Sorondo',
    ' Octavio Sergio Pico', 
    ' Ernesto Bosch',
    ' Adolfo Bioy', 
    ' Enrique Simón Pérez',
    ' Enrique Uriburu',
    ' Ernesto Padilla',
    ' Guillermo Rothe',
    ' Horacio Beccar Varela',
    ' David Arias',
    ' Octavio Sergio Pico',
    ' Pablo Calatayud',
    ' Francisco Medina',
	' Abel Renard',
    ' Carlos G. Daireaux',
	' Leopoldo Melo',
    ' Ramón S. Castillo',
    ' Manuel Ramón Alvarado',
    ' Carlos Saavedra Lamas',
	' Alberto Hueyo',
    ' Federico Pinedo',
    ' Roberto M. Ortiz',
    ' Carlos Alberto Acevedo',
    ' Manuel M. de Iriondo',
    ' Ramón S. Castillo',
    ' Jorge de la Torre',
    ' Antonio de Tomaso',
    ' Luis Duhau',
    ' Miguel Ángel Cárcano',
    ' Manuel Ramón Alvarado',
    ' Eleazar Videla',
    ' Manuel Ramón Alvarado',
    ' Eleazar Videla',
    ' Pedro Segundo Casal',
    ' Manuel A. Rodríguez',
    ' Eleazar Videla',
	' Diógenes Taboada',
    ' Miguel J. Culaciati',
    ' José María Cantilo',
    ' Julio Argentino Pascual Roca',
    ' Guillermo Rothe',
    ' Enrique Ruiz Guiñazú',
    ' Pedro Groppo',
    ' Federico Pinedo',
    ' Carlos Alberto Acevedo',
    ' Jorge Eduardo Coll',
    ' Guillermo Rothe',
    ' José Padilla',
    ' Cosme Massini Ezcurra',
    ' Daniel Amadeo y Videla',
    ' Manuel Ramón Alvarado',
    ' Luis Alberto Barberis',
    ' Salvador Oría',
    ' Carlos Márquez',
    ' León Scasso',
	' Miguel J. Culaciati',
	' Enrique Ruiz Guiñazú',
	' Carlos Acevedo',
    ' Guillermo Rothe',
    ' Daniel Amadeo y Videla',
	' Salvador Oría',
	' Juan Nerón Tonazzi',
    ' Pedro Pablo Ramírez',
    ' Mario Fincati']

const años = [1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943] //0 2 8 12 13

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

const dias = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

//clases//

const uriburu = new goberInfame ({id: 1, nombre: ' José Félix Benito Uriburu', tipoGob: 'Militar', inicio: `${dias[5]} de ${meses[8]} de ${años[0]}`, fin: `${dias[19]} de ${meses[1]} de ${años[2]}`, duracion: 'un 1 año, 7 meses y 14 días', gabinete: `\n Sus ministerios fueron ${ministerios.slice(0, 15)}`})

const justo = new goberInfame ({id: 2, nombre: ' Agustín Pedro Justo', tipoGob: 'Democrático Electo', inicio: `${dias[19]} de ${meses[1]} de ${años[2]}`, fin: `${dias[19]} de ${meses[1]} de ${años[8]}`, duracion: 'unos 6 años', gabinete: `\n Sus ministerios fueron ${ministerios.slice(15, 36)}`})

const ortiz = new goberInfame ({id: 3, nombre: ' Roberto Marcelino Ortiz', tipoGob: 'Democrático Electo', inicio: `${dias[19]} de ${meses[1]} de ${años[8]}`, fin: `${dias[26]} de ${meses[5]} de ${años[12]}`, duracion: 'unos 3 años, 4 meses y 7 días', gabinete: `\n Sus ministerios fueron ${ministerios.slice(36, 56)}`})

const castillo = new goberInfame ({id: 4, nombre: ' Ramón Antonio Castillo', tipoGob: 'Democrático Electo', inicio: `${dias[26]} de ${meses[5]} de ${años[12]}`, fin: `${dias[3]} de ${meses[5]} de ${años[13]}`, duracion: 'unos 11 meses y 8 días', gabinete: `\n Sus ministerios fueron ${ministerios.slice(56, 64)}`})

//instrucciones de ordenPres//

const presidentes = [uriburu, justo, ortiz, castillo]

const presLetrAsc = [uriburu, justo, ortiz, castillo]

const presLetrDes = [uriburu, justo, ortiz, castillo]

const presFechDes = [uriburu, justo, ortiz, castillo]

const presDemocraticos = presidentes.filter((es) => es.tipoGob.includes('Electo'))

const presLetrasAscendientes = presLetrAsc.sort((a, b) => {
    if (a.nombre > b.nombre ) {
        return 1
    }
    if (a.nombre < b.nombre) {
        return -1
    }
    return 0
})

const presLetrasDescendientes = presLetrDes.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return 1
    }
    if (a.nombre > b.nombre) {
        return -1
    }
    return 0
})

const presFechasDescendientes = presFechDes.sort((a, b) => {
    if (a.id < b.id) {
        return 1
    }
    if (a.id > b.id) {
        return -1
    }
    return 0
})

//resumenes de resPres()//

const resumenUriburu = `${uriburu.nombre} fue presidente de Argentina, su gobierno fue ${uriburu.tipoGob}, inició su mandato el ${uriburu.inicio} y lo finalizó en ${uriburu.fin}. Durando ${uriburu.duracion} en el poder.${uriburu.gabinete}.`;

const resumenJusto = `${justo.nombre} fue presidente de Argentina, su gobierno fue ${justo.tipoGob}, inició su mandato el ${justo.inicio} y lo finalizó en ${justo.fin}. Durando ${justo.duracion} en el poder.${justo.gabinete}.`;

const resumenOrtiz = `${ortiz.nombre} fue presidente de Argentina, su gobierno fue ${ortiz.tipoGob}, inició su mandato el ${ortiz.inicio} y lo finalizó en ${ortiz.fin}. Durando ${ortiz.duracion} en el poder.${ortiz.gabinete}.`;

const resumenCastillo = `${castillo.nombre} fue presidente de Argentina, su gobierno fue ${castillo.tipoGob}, inició su mandato el ${castillo.inicio} y lo finalizó en ${castillo.fin}. Durando ${castillo.duracion} en el poder.${castillo.gabinete}.`;

//el anexo principal//

function anexoPres () {
    let msg;
    while (msg != '0') {
        msg = prompt('Usted ha ingresado al anexo de los gobernantes que dirigieron la República Argentina durante la Década Infame\n\nIngrese uno de los siguientes valores:\n1- Resumen de presidentes\n2- Ordenar presidentes\n3- Resumen aleatorio de presidente\n(0 para volver)')
        switch (msg) {
            case '1':
                resPres()
                break;
            case '2':
                ordenPres()
                break;
            case '3':
                randomPres()
                break;
            default: 
                alert('Ingrese uno de los números especificados')
                break;
            case '0':
                alert('¡Nos vemos!')
        }
    }return
}

//resumen de presidentes//

function resPres () {
    let msg = prompt(`¿De quién querría tener un resumen?\n\n1-${uriburu.nombre}\n2-${justo.nombre}\n3-${ortiz.nombre}\n4-${castillo.nombre}\n(0 para volver)`)
    while (msg != "0") {
        switch (msg) {
            case '1':
                alert(resumenUriburu)
                return;
            case '2':
                alert(resumenJusto)
                return;
            case '3':
                alert(resumenOrtiz)
                return;
            case '4':
                alert(resumenCastillo)
                return;
            default: 
                alert('Ingrese uno de los números especificados')
                return;
        }
    }return
}

//orden de presidentes//

function ordenPres () {
    let msg = prompt('Usted puede ordenar los presidentes seleccionando las siguientes opciones:\n\n1- Separar presidentes no democráticos\n2- Por órden alfabético\n3- Por Fecha\n(0 para volver)')
    while (msg != '0') {
        switch (msg) {
            case '1':
                alert(`Los presidentes democráticos${presDemocraticos.map((el) => '.\n\n- ' + el.nombre).join('')}.`)
                return;
            case '2':
                porOrdenLetra()
                return;
            case '3':
                porOrdenFecha()
                return;
            default: 
                alert('Ingrese uno de los números especificados')
                return;
            case '0':
        }
    }return
}

function porOrdenLetra () {
    let msg = prompt('¿Ascendente o Descendente? \n\n1- Ascendente\n2- Descendente')
    while (msg != '0') {
        switch (msg) {
            case '1':
                alert(`Los presidentes ordenados de forma ascendente${presLetrasAscendientes.map((el) => '.\n\n- ' + el.nombre).join('')}`)
                return;
            case '2':
                alert(`Los presidentes ordenados de forma descendente${presLetrasDescendientes.map((el) => '.\n\n- ' + el.nombre).join('')}`)
                return;
            default: 
                alert('Ingrese uno de los números especificados')
                return;
            case '0':
        }
    }return
}

function porOrdenFecha () {
    let msg = prompt('¿Ascendente o Descendente? \n\n1- Ascendente\n2- Descendente')
    while (msg != '0') {
        switch (msg) {
            case '1':
                alert(`Los presidentes ordenados de forma ascendente${presidentes.map((el) => '.\n\n- ' + el.nombre).join('')}`)
                return;
            case '2':
                alert(`Los presidentes ordenados de forma descendente${presFechasDescendientes.map((el) => '.\n\n- ' + el.nombre).join('')}`)
                return;
            default: 
                alert('Ingrese uno de los números especificados')
                return;
            case '0':
        }
    }return
}

//resumen aleatorio//

function randomPres() {
    let random = Math.round(Math.random() * 3 + 1)
    if (random == 1) {
        alert(resumenUriburu)
    }
    else if (random == 2) {
        alert(resumenJusto)
    }
    else if (random == 3) {
        alert(resumenOrtiz)
    }
    else {
        alert(resumenCastillo)
    }
}

anexoPres()

console.log(presidentes)
console.log(presFechasDescendientes)
console.log(presLetrasAscendientes)
console.log(presLetrasDescendientes)