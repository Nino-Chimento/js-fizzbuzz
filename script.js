var fizz;
var buzz;
var fizzbuzz;
var messaggio;

for (var i = 1; i <= 100; i++) {
  // console.log(i);
  fizz = i%3;
  buzz = i%5;
  fizzbuzz = i%15

  if (fizzbuzz == 0) {
    messaggio = "fizzbuzz"
  }
  else if (buzz == 0) {
    messaggio = "buzz"
  }
  else if (fizz == 0) {
    messaggio = "fizz"
  }
  else {
    messaggio = i
  }
  // console.log(messaggio);
  document.getElementById('lista').innerHTML += "<li>"+messaggio+"</li>"
}
// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.
// console.log(messaggio);
i = 1;
while (i<=100) {
  fizz = i%3;
  buzz = i%5;
  fizzbuzz = i%15;
  if (fizzbuzz == 0) {
    messaggio = "fizzbuzz"
  }
  else if (buzz == 0) {
    messaggio = "buzz"
  }
  else if ( fizz == 0) {
    messaggio = "fizz"
  }
  else {
    messaggio = i;
  }
  i++
  document.getElementById("lista-while").innerHTML += "<li>"+messaggio+"</li>"
}

listaRandom =[0,1];
numeroRandom = 0;
for (var i = 1; i <= 100; i++) {
  numeroRandom = Math.floor(Math.random() * 100 + 1);
  listaRandom.push(numeroRandom)
  console.log(listaRandom)
}
