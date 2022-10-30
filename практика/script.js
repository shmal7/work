////цыкл
//for (let i=0; i<3; i++)
//    {
//        alert(i);
//    }
//
////программа для расчета возраста
//let eare=prompt("введите год рождения:");
//let ol=2022;
//let op=ol-eare;
//console.log(op);
//
//
//for (let index = 0; index < 100; index++) {
//
//    alert(index);
//
//}
//

console.log(8>6);

console.log(false == 0);

console.log(false || true)

console.log(false || false)

console.log("35"-1)

console.log(55+1)

console.log("Кролик" <  "Морковка");








//домашняя работа
var stop = false;

let age = prompt("Есть ли вам 18 лет?");



age > 18 ? (

    alert("Хорошо, вы можете продолжить."),

    location.assign("https://www.youtube.com/")

) : (

    stop = true,

    alert("Простите, вы очень молоды!")

);
