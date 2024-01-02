const p = document.getElementsByTagName("p")
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-UK';
rec.continuous = true;

rec.onresult = function (e) {
    const acceptedColors = [
        'red',
        'blue',
        'green',
        'yellow',
        'pink',
        'brown',
        'purple',
        'orange',
        'black',
        'white',
    ];

    for (let i = e.resultIndex; i < e.results.length; i++) {
        const script = e.results[i][0].transcript.toLowerCase().trim();
        p.textContent = script;
        console.log(script)
        if (acceptedColors.includes(script)) {
            document.body.style.backgroundColor = script;
        } else {
            alert('Please say a color');
        }
    }
};

rec.start();