// Récupère les éléments du HTML
const body = document.getElementsByTagName("body")[0]

// Fonction qui permet de changer la couleur dans le html
function setColor(name) {
    body.style.background = name;
}

// Fonction qui permet de changer la couleur aléatoirement dans le html (255 c'est le max RGB)
function randomColor() {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green},${blue})`
    body.style.background = color;
}
