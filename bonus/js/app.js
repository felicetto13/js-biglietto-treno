
alert("Ciao, di seguito ti verranno richiesti dei dati utili per calcolare il costo del biglietto!")

let prezzoKm = 0.21;
let etaPasseggero = "";
let kmDaPercorrere = "";

do {
    etaPasseggero = prompt("Inserite la vostra età");
    etaPasseggero = parseInt(etaPasseggero);
    if(isNaN(etaPasseggero) || etaPasseggero < 0 || etaPasseggero > 110){
        alert("Attenzione!! Devi inserire un valore numerico valido compreso tra 0 e 109!")
    }
} while(isNaN(etaPasseggero) || etaPasseggero < 0 || etaPasseggero > 110 )

do {
    kmDaPercorrere = prompt("Inserite i kilometri che vorreste percorrere (fino 450km)");
    kmDaPercorrere = parseInt(kmDaPercorrere);
    if(isNaN(kmDaPercorrere) || kmDaPercorrere < 0 || kmDaPercorrere > 450){
        alert("Attenzione!! Devi inserire un valore numerico valido compreso tra 0 e 450!")
    }
} while(isNaN(kmDaPercorrere) || kmDaPercorrere < 0 || kmDaPercorrere > 450 )





if (etaPasseggero < 18) {
    const prezzoKm20 = prezzoKm * 0.20;
    prezzoKm -= prezzoKm20;
}else
if (etaPasseggero >= 65) {
    const prezzoKm40 = prezzoKm * 0.40;
    prezzoKm -= prezzoKm40;
}


let prezzoTotale = prezzoKm * kmDaPercorrere;
prezzoTotale = prezzoTotale.toFixed(2);

document.getElementById("dati-calcolo-biglietto").innerHTML = `
                                                                <ul>
                                                                <li><i>L'età del passeggero è:</i> <span class="text-primary">${etaPasseggero}</span>.</li>
                                                                <li><i>I Kilometri che vuole percorrere sono:</i> <span class="text-danger">${kmDaPercorrere}km</span>.</li>
                                                                <li><strong><i>Il totale del biglietto sarà: </i>€ ${prezzoTotale} !</strong></li>
                                                                </ul>
                                                                `;
                                                                
