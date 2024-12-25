let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}
window.addEventListener("load", () => {
  wishMe();
});

let speechRecorginition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecorginition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});

function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";
  if (message.includes("hello") || message.includes("hey")) {
    speak("hello sir,what can i help you?");
  } else if (message.includes("who are you")) {
    speak("i am Drone a virtual assistant, created by adarsh singh rajput");
  } else if (message.includes("how are you")) {
    speak("i am fine what about you?");
  } else if (message.includes("tell")) {
    speak("jai shree ram");
  } else if (message.includes("open youtube")) {
    speak("opening youtube");
    window.open("https://www.youtube.com/", "_blank");
  } else if (message.includes("open google")) {
    speak("opening google");
    window.open("https://www.google.com/", "_blank");
  } else if (message.includes("open instagram")) {
    speak("opening instagram");
    window.open("https://www.instagram.com/", "_blank");
  } else if (message.includes("open linkdin")) {
    speak("opening linkdin");
    window.open("https://www.linkdin.com/", "_blank");
  } else if (message.includes("open github")) {
    speak("opening github");
    window.open("https://www.github.com/", "_blank");
  } else if (message.includes("open twitter")) {
    speak("opening twitter");
    window.open("https://www.twitter.com/", "_blank");
  } else if (message.includes("open spotify")) {
    speak("opening spotify");
    window.open("https://www.spotify.com/", "_blank");
  } else {
    speak(
      `this is waht i found on internet regarding${message.replace(
        "Hatim",
        ""
      )}`
    );
    window.open(`https://www.google.com/search?q=${message}`);
  }
}
let box = document.querySelector(".box");
let btn = document.querySelector("button");

const speakFunc = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    speakInput.rate = 1
    speakInput.pitch = 1
    speakInput.volume = 1
    speakInput.lang = 'en-US';
    window.speechSynthesis.speak(speakInput);
};

window.onload = () => {
    speakFunc("Hello Boss");
    greetingFunc();
};

const greetingFunc = () => {
    let date = new Date();
    let hour = date.getHours();
    if (hour >= 0 && hour < 12) {
        speakFunc("Good morning sir, How can I help you!");
    } else if (hour >= 12 && hour < 16) {
        speakFunc("Good afternoon sir, How can I help you!");
    } else {
        speakFunc("Good evening sir, How can I help you!");
    }
};

const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
        let recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onresult = (e) => {
            let spokenText = e.results[0][0].transcript;
            handleCommands(spokenText.toLowerCase());
            box.classList.remove("btn-box");
            btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
        };
        recognition.start();
    } else {
        alert("Your browser does not support voice input!");
    }
};

btn.onclick = () => {
    box.classList.remove("btn-box");
    btn.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`;
    startVoiceInput();
};

const handleCommands = (command) => {
    console.log(command);
    if (command.includes("hello") || command.includes("hey") || command.includes("hi")) {
        speakFunc("Hello Sir, How Can I Help You!");
    } else if (command.includes("who are you") || command.includes("developed") ||  command.includes("what your name") || command.includes("who r u")) {
        speakFunc("I Am Jarvis, Your Virtual Assistant, Developed By Hridoy Khan!");
    } else if (command.includes("open code pen") || command.includes("Court pen") || command.includes("coat pant")) {
        speakFunc("Opening... Code Pen");
        window.open("https://codepen.io/pen/");
    } else if (command.includes("open just for code website")) {
        speakFunc("Opening... Just For Code website");
        window.open("https://www.justforcode.in");
    } else if (command.includes("open google") ) {
        speakFunc("Opening... Google");
        window.open("https://www.google.com");
    } else if (command.includes("open youtube")) {
        speakFunc("Opening... YouTube");
        window.open("https://www.youtube.com");
    } else if (command.includes("open facebook")) {
        speakFunc("Opening... Facebook");
        window.open("https://www.facebook.com");
    } else if (command.includes("open calculator")) {
        speakFunc("Opening... Calculator");
        window.open("calculator://");
    } else if (command.includes("open chat gpt") || command.includes("open ai") || command.includes("gpt")) {
        speakFunc("Opening... Chat GPT");
        window.open("https://www.openai.com/chatgpt");
    } else if (command.includes("tell me time") || command.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: 'numeric', minute: 'numeric' });
        speakFunc(`The time is ${time}`);
    } else if (command.includes("tell me date") || command.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: 'numeric', month: 'long' });
        speakFunc(`Today is ${date}`);
    } else if (command.includes("open instagram") || command.includes("instagram")) {
        speakFunc("Opening... Instagram");
        window.open("https://www.instagram.com");
    } else {
        speakFunc(`This is what I found on the internet regarding ${command}`);
        window.open(`https://www.google.com/search?q=${command}`);
    }
};
