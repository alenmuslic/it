// Za proveru da li je vrednost nekog broja NaN se koristi metoda
// isNaN(vrednost);

// Ispisati prvih 10 brojeva u konzoli ,JEDAN ISPOD DRUGOG.

// Perlja(LOOP) predstwavlja nacin da se neki kod ispise uz odredjene uslove vise puta

// for pelja - sintaksaa

// for (statement1; statement2; statement3) {
// kod za izvrsavanje u svakoj interaciji
//statement1 predstavlja definisanje promenjive koja predstavlja iterator
//statement2 predstavlja uslov (granicu) do koje vrednosti ce iterator da Ide.
//statement3 predstavlja povecanje ili smanjenje koje se desi na kraju svake ieracije

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Ispisati brojeve od 1 do 10, izuzev broja 2 i broja 5

// 1. nacin
// for (let i = 1; i < 11; i++) {
//   if (i !== 2 && i !== 5) console.log(i);
// }

// continue znaci kada hocemo nesto da zaobidjemo da ne pise nista i da odma predje na sledeci element

//2. nacin
// for (let i = 1; i < 11; i++) {
//   if (i === 2 || i === 5) {
//     continue;
//   }
//   else {
//     console.log (i);
//   }
// }

// break keyword predstavlja da od tog trnutka for petlja prestaje sa radom

//Ispisati sve brojeve od 1 do 10 ako je neki broj deljiv sa 7  neka se prekine petlja

// for (let i = 1; i < 11; i++) {
//   if (i % 7 === 0) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

//ISPISSTI PARNE BROJEVE OD 1 DO 20 NA DVA NACINA

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i += 2) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5

for (let broj = 50; broj <= 100; broj++) {
  //broj++ === broj= broj=1;
  if (broj % 5 === 0) {
    console.log(broj);
  }
}

// Ispisati dvostruju vrednost prirodnih brojeva od 6 do 64
for (a = 6; a <= 14; a++) {
  console.log(a * 2);
}

//Suma parnih prirodnih brojeva od 10 d0 20
let suma = 0;
for (i = 10; i < 21; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}
console.log(suma);
