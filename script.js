console.log("JS OK");

// TRACCIA
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana
//  (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// 0 - prendo l'elemento nel DOM
const targetElement = document.getElementById("target");
console.log("target");



// 1- chiedere all'utente il numero di km che vuole percorrere
const userKm = parseInt(prompt (" Quanti chilometri vuoi percorrere?").trim());
console.log("userKm" + userKm);

//! VALIDATION USERKM
if (isNaN(userKm) ){
    alert ("Devi inserire un numero !")
}

// 2 - chiedere all'utente quanti anni ha
const userAge = parseInt(prompt (" Quanti anni hai?").trim());
console.log("userAge" + userAge);

//! VALIDATION USERAGE
if (isNaN(userAge) ){
    alert ("Devi inserire un numero !")
}

// PRICE FUEL
const fuelPrice = 0.21;

// PRECENTUALE a 40 %
const percentMajor = 60;
// PRECENTUALE a 20 %
const percentMinor = 80;

// SALE OVER 60
const saleMajor = (percentMajor / 100) * userKm;
console.log ("saleMajor" + saleMajor);

saleMajor.toFixed(1);

// SALE MINORS
const saleMinor = (percentMinor / 100) * userKm;
console.log ("saleMinor" + saleMinor);

saleMinor.toFixed(1);

// TOTAL
let total = (saleMajor * fuelPrice);
console.log("total" + total);


let message = "Il prezzo del biglietto è" +" "+ total;
if(userAge < 18 ){
    message = "Il prezzo del biglietto è" +" "+ (saleMinor * fuelPrice);
}


targetElement.innerText = message;




