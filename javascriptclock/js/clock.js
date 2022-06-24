
//ekrandan isim bilgisini al
let getName = prompt("isminizi giriniz");

//DOM isim bilgisi
let addName = document.getElementById('myName');

//isim bilgisini ekle
addName.append(getName);

//günler
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

//tarih bilgisini al
let today = new Date();

//DOM tarih bilgisi
let date = today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear() + ' ' + days[today.getDay()];

//tarih bilgisini ekle
document.getElementById("myClock").innerHTML = date;

