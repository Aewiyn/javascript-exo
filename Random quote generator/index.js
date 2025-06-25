const quotes = [
    "A rose by any other name would smell as sweet.",
    "All that glitters is not gold.",
    "All the world’s a stage, and all the men and women merely players.",
    "Ask not what your country can do for you; ask what you can do for your country.",
    "Ask, and it shall be given you; seek, and you shall find.",
    "Eighty percent of success is showing up.",
    "Elementary, my dear Watson.",
    "For those to whom much is given, much is required.",
    "Frankly, my dear, I don't give a damn.",
    "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "Go ahead, make my day.",
    "He travels the fastest who travels alone.",
    "Hell has no fury like a woman scorned.",
    "Hell is other people.",
    "Here's looking at you, kid.",
]

//Nes créé un nouveau set à chaque lancement. Set permet de ne pas répéter la même quote
//randomIdX va venir mélanger les ID des quotes pour les sortir aléatoirement
//Il prend quotes.length pour compte les idx
//innerHTML permet de récupérer ce qu'il y a entre les ""
//Continue permet de remonter à while et de continuer à loop
//usedIndexes.clear permet de recommencer le loop quand on a passer toutes les quotes

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length)
        usedIndexes.clear()
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break 
    }

}