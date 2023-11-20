//Ejercicio 1

var cantidadDeGatos = 10;

for (var i = 1; i <= cantidadDeGatos; i++) {
  var emoji;
  
  if (i % 3 === 1) {
    emoji = '😺';
  } else if (i % 3 === 2) {
    emoji = '😸';
  } else {
    emoji = '😹';
  }
  console.log('Gato #' + i + ': ' + emoji);
}

//Ejercicio 2

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var i = 1; i <= cantidadDeGatos; i++) {
  var gatos = 'Gato #' + i + ': 🐈';
  var pasos = ' 🐾'.repeat(cantidadDePasos);
  console.log(gatos + pasos);
}

//Ejercicio 3

var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
  var gatitos = 'Gato #' + i + ': ';
  
  if (i % 2 === 0) {
    gatitos += '🐈‍🐈';
  } else {
    gatitos += '🐈';
  }

  var pasos = '';
  for (var j = 1; j <= cantidadDePasos; j++) {
    pasos += ' 🐾';
  }
  console.log(gatitos + pasos);
}