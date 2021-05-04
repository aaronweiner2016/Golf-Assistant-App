var startRound = document.querySelector('.start-round')
var roundGolf = document.querySelector('#round-golf')
var newGame = document.querySelector('#new-game')
var selectedCourse, roundId;

var holeNum = 1;

startRound.addEventListener('click', async () => {
    newGame.classList.add('hide');
    roundGolf.classList.remove('hide')

    var courseId = document.getElementById('select-course').value

    if (courseId) {
        const response = await fetch('api/round/' + courseId, {
            method: 'POST',
            // headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            console.log("okay")
            selectedCourse = courseId;
        } else {
            alert("failed")
        }
    }
})

var nextHole = document.querySelector('.next-hole')
var holeNumber = document.querySelector('#hole-number')
var scoreCard = document.querySelector('#score-card')
var home = document.querySelector('.home')


holeNumber.innerHTML = holeNum;

nextHole.addEventListener('click', async () => {
    var score = document.querySelector('#score').value
    var putts = document.querySelector('#putts').value
    var fairway = document.querySelector('#fairway').checked
    var greenCheck = document.querySelector('#greenCheck').checked


    if (selectedCourse) {
        const response = await fetch('api/holes', {
            method: 'POST',
            body: JSON.stringify({ holeNumber: holeNum, numberOfPutts: putts, numberOfStrokes: score, fairwayHit: fairway, greenHit: greenCheck }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            console.log("good to go")
        } else {
            alert("failed")
        }
    }


    holeNum++;
    holeNumber.innerHTML = holeNum;

    document.querySelector('#score').value = "";
    document.querySelector('#putts').value = "";
    document.querySelector('#fairway').checked
    document.querySelector('#greenCheck').checked

    if (holeNum === 1) {
        nextHole.innerHTML = "Finish Game"
    }

    if (holeNum === 2) {
        document.location.replace('/score-card');
    }
})

// home.addEventListener('click', () => {
//     document.location.replace('/');
// })