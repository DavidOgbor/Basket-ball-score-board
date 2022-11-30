let countEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let totalSum = document.getElementById("total-sum")
let decrease4 = document.getElementById("decrease")
let decrease2 = document.getElementById("decrease2")
let count = 0

function inBy1() {
    count += 1
    countEl.textContent = count 
}
function inBy2() {
    count += 2
    countEl.textContent = count 
}
function inBy3() {
    count += 3
    countEl.textContent = count 
}
let count2 = 0
function incBy1() {
    count2 += 1
    guestEl.textContent = count2
}
function incBy2() {
    count2 += 2
    guestEl.textContent = count2
}
function incBy3() {
    count2 += 3
    guestEl.textContent = count2    
}


function sum() {
    let result = Number(countEl.innerHTML) + Number(guestEl.innerHTML)
    totalSum.textContent = result
}


function dec4() {
    countEl.textContent -= 4
}

function dec2() {
    guestEl.textContent -= 2
}

function reset() {
    countEl.textContent = 0
    guestEl.textContent = 0
    totalSum.textContent = 0
    count = 0
    count2 = 0
}