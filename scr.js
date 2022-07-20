let squares = document.querySelectorAll('.colors');

const timesClicked = {'cyan' : 0, 'indigo': 0, 'spec': 0}
squares.forEach(square =>{
    square.onclick = () => {
        timesClicked[square.value] +=1;
        square.innerText = timesClicked[square.value]
    }
} )


function clearScore() {
    squares.forEach( square => square.innerText = ' ')
}
const cleargame = document.getElementById('clear')
cleargame.onclick = () => clearScore()