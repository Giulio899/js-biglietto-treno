var eta = parseFloat(prompt('Quanti anni hai?', 'Inserisci la tua età'));
var km = parseFloat(prompt('Quanti chilometri vuoi percorrere?', 'Inserisci i chilometri'));
var costoPerKm = 0.21;
var costoTot = km * costoPerKm;

if (eta < 18) {
  costoTot = (costoTot - (costoTot * 0.2)).toFixed(2);
} else if (eta >= 65) {
  costoTot = (costoTot - (costoTot * 0.4)).toFixed(2);
}

document.getElementById('costo-biglietto').innerHTML = costoTot + '€';
