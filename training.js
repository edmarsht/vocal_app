const text = "Hi ! I'm Edouard and i'm looking for a job as a react js developer, contact me !";
const Speech = new SpeechSynthesisUtterance(text);

Speech.volume = 1;
Speech.rate = 1;
Speech.pitch = 1;

window.speechSynthesis.speak(Speech);