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
    var fairway = document.querySelector('#fairway').value
    var greenCheck = document.querySelector('#greenCheck').value

    console.log(fairway)

    // if (fairway === 'on') {
    //     fairway = 1;
    // } else {
    //     fairway = 0;
    // }

    // if (greenCheck === 'on') {
    //     greenCheck = 1;
    // } else {
    //     greenCheck = 0;
    // }

    console.log(fairway)
    console.log(greenCheck)

    // console.log(fairWay)
    console.log(greenCheck)
    // if (selectedCourse) {
    //     const response = await fetch('api/holes', {
    //         method: 'POST',
    //         body: JSON.stringify({ round_of_golf_id: activeRound, }),
    //         headers: { 'Content-Type': 'application/json' },
    //     })
    // }

    holeNum++;
    holeNumber.innerHTML = holeNum;

    if (holeNum === 19) {
        roundGolf.classList.add('hide')
        scoreCard.classList.remove('hide')
    }
})

home.addEventListener('click', () => {
    document.location.replace('/');
})