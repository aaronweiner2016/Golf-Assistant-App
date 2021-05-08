const player1Input = document.getElementById("p1hc")
const player2Input = document.getElementById("p2hc")
const player3Input = document.getElementById("p3hc")
const player4Input = document.getElementById("p4hc")

const player1Display = document.getElementById("p1quota")
const player2Display = document.getElementById("p2quota")
const player3Display = document.getElementById("p3quota")
const player4Display = document.getElementById("p4quota")

const quotaButton = document.getElementById("btnqta")

if (player1Display) player1Display.style.visibility = 'hidden';
if (player2Display) player2Display.style.visibility = 'hidden';
if (player3Display) player3Display.style.visibility = 'hidden';
if (player4Display) player4Display.style.visibility = 'hidden';

if (quotaButton) {
    quotaButton.addEventListener("click", (e) => {
        e.preventDefault()
        player1Display.value = 36 - player1Input.value
        player1Display.style.visibility = 'visible';

        player2Display.value = 36 - player2Input.value
        player2Display.style.visibility = 'visible';

        player3Display.value = 36 - player3Input.value
        player3Display.style.visibility = 'visible';

        player4Display.value = 36 - player4Input.value
        player4Display.style.visibility = 'visible';
    })
}