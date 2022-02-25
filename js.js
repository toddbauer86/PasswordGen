//called by button
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//defined character sets
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

//runs through prompts to get password information
function generatePassword() {
    var choices = prompts();
    var notready = [];
    var final = "";

    if (choices.askNumbers) {
        for (var i of numbers)
            notready.push(i);
    }
    if (choices.askLowerCase) {
        for (var i of lowerCase)
            notready.push(i);
    }
    if (choices.askUpperCase) {
        for (var i of upperCase)
            notready.push(i);
    }
    if (choices.askSpecial) {
        for (var i of special)
            notready.push(i);
    }


    console.log(notready);


    for (var i = 0; i < choices.length; i++) {
        final += notready[Math.floor(Math.random() * notready.length)];

    }
    console.log(final);

    return final;
}

//use a do statement to make sure minimum length was met and at least one character was selected
function prompts() {
    var valid = false;
    do {
        var length = prompt("Choose password length between 8 and 128 characters");
        var askNumbers = confirm("Do you want your password to contain numbers? Click cancel for no.");
        var askLowerCase = confirm("Do you want your password to contain lower case letters? Click cancel for no.");
        var askUpperCase = confirm("Do you want your password to contain upper case letters? Click cancel for no.");
        var askSpecial = confirm("Do you want your password to contain special characters? Click cancel for no.");
        var responses = {
            length: length,
            askNumbers: askNumbers,
            askLowerCase: askLowerCase,
            askUpperCase: askUpperCase,
            askSpecial: askSpecial
        }
        if ((length < 8) || (length > 128))
            alert("Choose number between 8 and 128");
        else if ((!askNumbers) && (!askLowerCase) && (!askUpperCase) && (!askSpecial))
            alert("You must chose at least one type of character");
        else
            valid = true;

    } while (!valid);
    return responses;
}



