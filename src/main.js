let randomNumber = Math.floor(Math.random() * 100) + 1
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")
let guessCount = 1
let resetButton

const checkGuess = () => {
	let userGuess = Number(guessField.value)
	if (guessCount === 1) {
		guesses.textContent = "前回の予想: "
	}

	guesses.textContent += userGuess + " "

	if (userGuess === randomNumber) {
		lastResult.textContent = "おめでとう! 正解です!"
		lastResult.style.backgroundColor = "green"
		lowOrHi.textContent = ""
		setGameOver()
	} else if (guessCount === 10) {
		lastResult.textContent = "ゲームオーバー!!!"
		lowOrHi.textContent = ""
		setGameOver()
	} else {
		lastResult.textContent = "ハズレ!"
		lastResult.style.backgroundColor = "red"
		if (userGuess < randomNumber) {
			lowOrHi.textContent = "低すぎです!"
		} else if (userGuess > randomNumber) {
			lowOrHi.textContent = "高すぎです!"
		}
	}

	guessCount++
	guessField.value = ""
	guessField.focus()
}

guessSubmit.addEventListener("click", checkGuess)

const setGameOver = () => {
	guessField.disabled = true
	guessSubmit.disabled = true
	resetButton = document.createElement("button")
	resetButton.textContent = "ゲームスタート"
	document.body.appendChild(resetButton)
	resetButton.addEventListener("click", resetGame)
}

const resetGame = () => {
	guessCount = 1
	const resetParas = document.querySelectorAll(".resultParas p")
	resetParas.forEach(x => (x.textContent = ""))

	resetButton.parentNode.removeChild(resetButton)
	guessField.disabled = false
	guessSubmit.disabled = false
	guessField.value = ""
	guessField.focus()
	lastResult.style.backgroundColor = "white"
	randomNumber = Math.floor(Math.random() * 100) + 1
}
