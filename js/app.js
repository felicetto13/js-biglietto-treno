
alert("Ciao, di seguito ti verranno richiesti dei dati utili per calcolare il costo del biglietto!")

let prezzoKm = 0.21;
let etaPasseggero = prompt("Inserite la vostra età");
etaPasseggero = parseInt(etaPasseggero);


let kmDaPercorrere = prompt("Inserite i kilometri che vorreste percorrere");

kmDaPercorrere = parseInt(kmDaPercorrere);

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
                                                                
/* if(!isNaN(etaPasseggero) && etaPasseggero < 0 && etaPasseggero > 110 ){
    alert("Attenzione!! Dovete inserire un numero che deve essere compreso tra 0 e 109!")
    etaPasseggero = prompt("Inserite la vostra età");
    console.log(isNaN(etaPasseggero));
} */

/* while(isNaN(etaPasseggero)== false || etaPasseggero < 0 || etaPasseggero > 110){
    etaPasseggero = prompt("Inserite la vostra età");
    etaPasseggero = parseInt(etaPasseggero);
    console.log(isNaN(etaPasseggero))
    alert("Attenzione!! Dovete inserire un numero che deve essere compreso tra 0 e 109!")
    
} */

/* if(isNaN(kmDaPercorrere)){
    alert("Attenzione!! Dovete inserire un numero!")
    etaPasseggero = prompt("Inserite i kilometri che vorreste percorrere")
} */
