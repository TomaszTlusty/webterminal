let input = document.getElementById("input")
let history = document.getElementById("history")
let keyPress = ""
let currentInput = ""

document.addEventListener("keydown",event => {TextToTerminal(event)})

function TextToTerminal(event){
    keyPress = event.key
    console.log(keyPress)

    if (keyPress.length === 1){
       currentInput += event.key
    }

    switch (keyPress) {
        case "Backspace":
            currentInput = currentInput.slice(0,-1)
            break
        case "Shift":
            return;
        case "Alt":
            return;
        case "Enter":
            AddToHistory(currentInput)
            UseCommand(currentInput)
            currentInput = ""
            break;

    }

    input.textContent = currentInput
}

function AddToHistory(text){
    let p = document.createElement("p")
    p.innerHTML = text //use p.textContent to protect from XSS
    history.appendChild(p)
}

function UseCommand(command){
    switch (command){
        case "clear":
            history.replaceChildren()
            return;
        case "whoami":
            AddToHistory("young handsome human : )")
            return;
        case "neofetch":
            AddToHistory("this is not operating system bro")
            return;
        case "help":
            AddToHistory("yeah so try other comands like")
            AddToHistory('"clear"')
            AddToHistory('"whoami"')
            AddToHistory('"neofetch"')
            return;
        default:
            AddToHistory("couldn't find command")
    }
}