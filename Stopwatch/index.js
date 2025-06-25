//Let pour pouvoir changer la valeur contrairement à const
let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

//padstart 2 va forcer à avoir 2 digit. si un seul alors ca rajopute un 0 (09:00 au lien de 9:0)
function padStart(value) {
    return String(value).padStart(2, "0")
}

// Math.floor permet d'arrondir (floor en dessous=)
// % ca va mettre ce qui reste après le calcul précédent (donc après avoir divisé 60)
// '${}:${}' permet de call les constantes et des les visualiser sous forme de str
function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}` ;
}
function timer() {
    secondsElapsed++;
    setTime()
}
function startClock() {
    if (interval) stopClock ()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}