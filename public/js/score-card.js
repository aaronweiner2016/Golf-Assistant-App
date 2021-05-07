var homeBtn = document.querySelector('.home')

homeBtn.addEventListener('click', async () => {
    var score = document.getElementById('score').textContent.trim();
    var putts = document.getElementById('putts').textContent.trim();

    if (score && putts) {
        const response = await fetch('api/stats', {
            method: 'POST',
            body: JSON.stringify({ totalScore: score, totalPutts: putts }),
            headers: { 'Content-Type': 'application/json' }
        })
        if (response.ok) {
            console.log("well done!!!!!")
        } else {
            alert("failed")
        }
    }

})