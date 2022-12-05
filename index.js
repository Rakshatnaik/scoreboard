let first_score = document.getElementById("score1")

let second_score = document.getElementById("score2")

let count1 = 0
let count2 = 0

function homeOne() {
    count1 += 1
    first_score.innerText = count1
}


function homeTwo() {
    count1 += 2
    first_score.innerText = count1
}


function homeThree() {
    count1 += 3
    first_score.innerText = count1
}

function guestOne() {
    count2 += 1
    second_score.innerText = count2
}


function guestTwo() {
    count2 += 2
    second_score.innerText = count2
}


function guestThree() {
    count2 += 3
    second_score.innerText = count2
}