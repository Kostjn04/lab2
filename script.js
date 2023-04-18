let time;
let name;
let  yourName;
let password;
let number;
let a;
let b;
let c;
time = prompt("Enter current time:");
if (time > 17) {
    alert("Добрий вечір");
}

else {
    alert("Доброго дня"); 
}

name = prompt("Enter your name:");
if (name == "John") {
    alert("Привіт John");
}

else {
    alert("Я вас не знаю"); 
}

yourName = prompt("Enter your name:");
password = prompt("Enter your password:");

if (yourName  ==  "ivan" && password == "333ssss" || password == "666gibs" 
|| password == "0000" ) {
    alert("Ласкаво просимо");
}

else {
    alert("Користувач не знайдений");
}

for (let i = 0; i < 1; i++) {
    a = prompt ("Enter random number");
    b = prompt ("Enter random number");
    c = prompt ("Enter random number");
    alert(Math.max(a,b,c));
}




