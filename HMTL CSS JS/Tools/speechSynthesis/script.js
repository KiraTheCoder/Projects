const form = document.getElementById("form")
const voiceSelect = document.getElementById("voice-select")
const textInput = document.getElementById("text-input")

const synth = window.speechSynthesis;

let voices;

function addVoicesToSelect() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement('option')
        option.textContent = `${voices[i].name} - ${voices[i].lang}`
        option.textContent += (voices[i].default) ? " - Default" : ""
        option.setAttribute("data-name", voices[i].name)
        option.setAttribute("data-lang", voices[i].lang)
        voiceSelect.appendChild(option);
    }
}

function onSubmit(e) {
    e.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(textInput.value)

    const selectOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectOption)
            utterThis.voice = voices[i]
    }


    synth.speak(utterThis)
}

if (speechSynthesis.onvoiceschanged !== undefined) {
    // must linked 
    speechSynthesis.onvoiceschanged = addVoicesToSelect

}
form.addEventListener('submit', onSubmit)



// //  Very Simple and Basic App
// const form = document.getElementById("form")
// const textInput = document.getElementById("text-input")

// const synth = window.speechSynthesis;


// function onSubmit(e) {
//     e.preventDefault();
//     const utterThis = new SpeechSynthesisUtterance(textInput.value)
//     synth.speak(utterThis)
// }


// form.addEventListener('submit', onSubmit)