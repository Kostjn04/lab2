let time;
let name;
let  yourName;
let password;
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
