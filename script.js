let input = document.getElementById("input")
let history = document.getElementById("history")
let keyPress = ""
let currentInput = ""
const bashHistory = []
let bashHistoryIndex = 0
const fileSystem = {

}

document.addEventListener("keydown",event => {TextToTerminal(event)})

function TextToTerminal(event){
    keyPress = event.key
    if (keyPress.length === 1){
       currentInput += event.key
    }
    switch (keyPress) {
        case "ArrowUp":
            event.preventDefault()
            if (bashHistoryIndex < bashHistory.length){
                bashHistoryIndex++
            }
            currentInput = bashHistory.at(bashHistory.length - bashHistoryIndex)
            break
        case "ArrowDown":
            event.preventDefault()
            if (bashHistoryIndex >= 1 ){
                bashHistoryIndex--
            }

            if(bashHistoryIndex === 0){
                currentInput = ""
            }else{
                currentInput = bashHistory.at(bashHistory.length - bashHistoryIndex)
            }
            break
        case "Backspace":
            currentInput = currentInput.slice(0,-1)
            break
        case "Shift":
            return;
        case "Alt":
            return;
        case "Enter":
            console.log(bashHistoryIndex)
            AddToHistory(currentInput)
            displayInHistory(currentInput)
            UseCommand(currentInput)
            bashHistoryIndex = 0
            currentInput = ""
            break;

    }

    input.textContent = currentInput
}

function AddToHistory(text){
    if (text.length >= 2){
        bashHistory.push(text)
    }
}

function displayInHistory(text){
    let p = document.createElement("p")
    p.textContent = text
    history.appendChild(p)
}

function UseCommand(command){
    switch (command){
        case "clear":
            history.replaceChildren()
            return;
        case "whoami":
            displayInHistory("young handsome human : )")
            return;
        case "neofetch":
            displayInHistory("this is not operating system bro")
            return;
        case "help":
            displayInHistory("other commands")
            displayInHistory('"clear"')
            displayInHistory('"whoami"')
            displayInHistory('"neofetch"')
            return;
        default:
            displayInHistory("couldn't find command")
    }
}