/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Formula per il calcolo: km * 0.21 = prezzoBiglietto
Stampare in HTML una lista con eta inserità, km inseriti ed il prezzo finale
eta: 50
km: 120
prezzzo: 24,50
BONUS:
validare/ controllare i dati inseriti
età è un numero?
età è stata inserita
km è un numero valido?
posso inserire un minimo / massimo di km possibili? */

/* 
    chiedere all'utente di immettere i dati (km da percorrere e età)
    questi dati verranno salvati in delle variabili
    le variabili le trasformiamo in numeri interi
    impostare il prezzo per kilometro di partenza in una variabile

    Controllare l'eta del passeggero
        -SE il passeggero è minorenne
            -allora il prezzo per kilometro sarà scontato del 20%
        -ALTRIMENTI SE il passeggero sarà over65
                        -allora il prezzo per kilometro sarà scontato del 40%
    
    Verificate queste condidizioni, calcoliamo il totale in una variabile
    Essendo che il calcolo potrà produrre un numero con 2 o più cifre decimali, usiamo la funzione .toFixed(2) per ridurre il numero degli stessi a 2

    Scriviamo i risultati nella pagina HTML come richiesto da consegna
 */
alert("Ciao, di seguito ti verranno richiesti dei dati utili per calcolare il costo del biglietto!")

// @ts-ignore
let prezzoKm = 0.21;
const eta = prompt("Inserite la vostra età");
// @ts-ignore
let etaPasseggero = parseInt(eta);


// @ts-ignore
let kmDaPercorrere = prompt("Inserite i kilometri che vorreste percorrere");

// @ts-ignore
kmDaPercorrere = parseInt(kmDaPercorrere);

if (etaPasseggero < 18) {
    const prezzoKm20 = prezzoKm * 0.20;
    prezzoKm -= prezzoKm20;
}else
if (etaPasseggero >= 65) {
    const prezzoKm40 = prezzoKm * 0.40;
    prezzoKm -= prezzoKm40;
}


// @ts-ignore
let prezzoTotale = prezzoKm * kmDaPercorrere;
// @ts-ignore
prezzoTotale = prezzoTotale.toFixed(2);

document.getElementById("dati-calcolo-biglietto").innerHTML = `
                                                                <ul>
                                                                <li><i>L'età del passeggero è:</i> <span class="text-primary">${etaPasseggero}</span>.</li>
                                                                <li><i>I Kilometri che vuole percorrere sono:</i> <span class="text-danger">${kmDaPercorrere}km</span>.</li>
                                                                <li><strong><i>Il totale del biglietto sarà: </i>€ ${prezzoTotale} !</strong></li>
                                                                </ul>
                                                                `;
                                                                
