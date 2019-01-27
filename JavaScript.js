var operator = ["+", "-", "×", "÷", "^"];
var button = document.getElementsByTagName("button");
var bool = true;
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", select);
    function select() {

        var scrin = document.getElementsByClassName("scaner")[0];
        var value = scrin.innerHTML;
        var input = this.innerHTML;
        debugger;

        if (input == "c") {
            scrin.innerHTML = "";
            bool = true;
        }
        else if (input == "=") {
            debugger;
            var equalVal = value;
            var lasChr = equalVal[equalVal.length - 1];
            while (operator.indexOf(lasChr) > -1 || lasChr == '.') {
                equalVal = equalVal.replace(/.$/, '');
                lasChr = equalVal[equalVal.length - 1];

            }
            equalVal = equalVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');

            scrin.innerHTML = eval(equalVal);
            bool = true;
        }
        else if (input == '.' && bool) {
            scrin.innerHTML += input;
            bool = false;
        }
        else if (operator.indexOf(input) > -1) {
            if (operator.indexOf(value[value.length - 1]) == -1) {
                scrin.innerHTML += input;
            }
            else if (scrin.innerHTML == '' && input == '-') {
                scrin.innerHTML += input;

            }
            else if (operator.indexOf(value[value.length - 1]) > -1) {
                value = value.replace(/.$/, input);
                scrin.innerHTML = value;
            }
            bool = true;
        }
        else if (input != '.') {
            scrin.innerHTML += input;
        }
    }
}
//--------------------------------------------------------------//
document.onkeypress = function (key) {
    debugger;
    var scrin = document.getElementsByClassName("scaner")[0];
    var value = scrin.innerHTML;
    var key_value = key.key;
    var key_code = key.keyCode;
    key_value = key_value.replace('*', "×").replace("/", "÷");

    if (key_code == 46) {
        scrin.innerHTML = "";
    }
    else if (key_code == 13) {
        var equalVal = value;
        var lasChr = equalVal[equalVal.length - 1];
        while (operator.indexOf(lasChr) > -1 || lasChr == '.') {
            equalVal = equalVal.replace(/.$/, '');
            lasChr = equalVal[equalVal.length - 1];
        }
        equalVal = equalVal.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');
        scrin.innerHTML = eval(equalVal);
    }
    else if (operator.indexOf(key_value) > -1) {
        var lasChr = value[value.length - 1];
        if (key_value == '-' && lasChr != '-') {
            scrin.innerHTML += key_value;
        }
        else if (operator.indexOf(lasChr) > -1 && operator.indexOf(value[value.length - 2]) == -1) {
            value = value.replace(/.$/, key_value);
            scrin.innerHTML = value;
        }

        else if (operator.indexOf(lasChr) == -1) {
            scrin.innerHTML += key_value;
        }
    }
    else if (key_code >= 48 && key_code <= 57) {
        scrin.innerHTML += key_value;

    }

}
function clearr() {
    debugger;
    var top = 0;
    setInterval(rood, 1);
    function rood() {
        if (top < 485) {
            top += 1;
            document.getElementById("clear").style.top = top + "px";
        }

    }
}
