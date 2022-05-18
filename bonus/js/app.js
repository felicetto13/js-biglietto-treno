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

                        --- BONUS ---

    inizializzo le variabili etaPasseggero e kmDaPercorrere dando come default ""
    inizializzo il prezzo per kilometro in una variabile

    ** CONTROLLO ETA' PASSEGGERO **
    con un do/while faccio un ciclo che mi permette di richiedere all'utente client di inserire i dati corretti
        -all'inizio del ciclo chiedo all'utente di inserire l'età del passeggero
        -lo trasformo in un intero con la funzione ParseInt
        -SE questo valore sarà un NaN o minore di 0 o maggiore di 109
            allora uscirà un messaggio che mette in guardia l'utente di inserire valori corretti
    il ciclo si interrompe dal momento che tutte le condizioni diventino true

    ** CONTROLLO KM DA PERCORRERE **
    con un do/while faccio un ciclo che mi permette di richiedere all'utente client di inserire i dati corretti
        -all'inizio del ciclo chiedo all'utente di inserire i km da percorrere
        -lo trasformo in un intero con la funzione ParseInt
        -SE questo valore sarà un NaN o minore di 0 o maggiore di 450(così impostiamo un limite per i kilometri)
            allora uscirà un messaggio che mette in guardia l'utente di inserire valori corretti
    il ciclo si interrompe dal momento che tutte le condizioni diventino true

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
                                                                
