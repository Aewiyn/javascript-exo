// Permet d'accéder aux éléments
const input = document.getElementById("input")

//Déterminer si il s'agit d'un palindrome
function reverseString(str) {
    return str.split("").reverse().join("")
}

// Permet d'accéder à la value. 
function check() {
    const value = input.value
    const reverse = reverseString(value)

    //Déterminer si il s'agit d'un palindrome. "Alert" fait un pop up dans le navigateur

    if (value === reverse) { 
        alert("P A L I N D R O M E")
    } else {
        alert("Not today!")
    }

// Fais en sorte que ca vide la barre après avoir écris et check
    input.value = ""
}