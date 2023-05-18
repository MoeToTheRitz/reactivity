let price = 5;
let quantity = 2;
let total = 0;
let storage = [];

function target() {
  total = price * quantity;
}

function record() {
  storage.push(target);
}

function replay() {
  storage.forEach(run => run());
}

record();
target();

console.log(total);

// Preis und Menge aktualisieren

price = 10;

quantity = 3;

replay();
console.log(total);
