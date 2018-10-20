//add more functionality
//how many tries the user does
//a reset button
//bootstrap ui
//difficulty levels - more number combinations
//score


var cCode = [];
var count = 0;
var output = document.getElementById("output");
var c1 = document.getElementById("code1");
var c2 = document.getElementById("code2");
var c3 = document.getElementById("code3");

for (var x = 0; x < 3; x++) {
    cCode.push(Math.floor(Math.random() * 9));
}

// output.innerHTML = cCode;

function code() {
    count = 0;
    var guess = [c1.value, c2.value, c3.value];
    for (var x = 0; x < cCode.length; x++) {
        output.innerHTML += checkNum(guess[x], cCode[x]);
    }
    if (count === 3) {
        output.innerHTML += " You got it right!";
    } else {
        output.innerHTML += "<br/>";
    }
}

function checkNum(a, b) {

    if (a < b) {
        return "H";
    }
    if (a > b) {
        return "L";
    }
    if (a == b) {
        count++;
        return a;
    }
}
