const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

//********************************************Asynchronous callback************************************************************
/* fetchPuzzle('1').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(error)
})

getCurrentCountry().then((country) => {
    console.log(country)
}).catch((error) => {
    console.log(error)
}) */

const render = () => {
    puzzleEl.textContent = game1.getPuzzle
    guessesEl.textContent = game1.getStatusMessage
}

const startGame = async () => {
    const puzzle = await fetchPuzzle('1')
    game1 = new Hangman(puzzle,5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

//**********************************************Synchronous callback************************************************************
/* const puzzle1 =  getPuzzleSync()
console.log(puzzle1)
console.log('it works fine') */