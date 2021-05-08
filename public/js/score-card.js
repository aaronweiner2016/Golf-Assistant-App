var homeBtn = document.querySelector('.home')

homeBtn.addEventListener('click', async () => {
    var score = document.getElementById('score').textContent.trim();
    var putts = document.getElementById('putts').textContent.trim();
    var fairway = document.getElementById('fairway').textContent.trim();
    var green = document.getElementById('green').textContent.trim();

    // console.log("fairway", fairway);
    // console.log("green", green);

    if (score && putts && fairway && green) {
        const response = await fetch('api/stats', {
            method: 'POST',
            body: JSON.stringify({ totalScore: score, totalPutts: putts, totalFairway: fairway, totalGreen: green  }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            console.log("well done!!!!!")
        } else {
            alert("failed")
        }
    }
    
    document.location.replace('/');
})