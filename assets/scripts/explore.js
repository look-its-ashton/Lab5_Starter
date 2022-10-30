// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const synth = window.speechSynthesis;
  let voices = [];
  let talkButton = document.querySelector("#explore button");
  let talkField = document.getElementById("text-to-speak");
  let talkImg = document.querySelector("#explore img");

  speechSynthesis.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices();
    populateVoiceList();
  })

  talkButton.addEventListener('click', pressToTalk);

  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  function pressToTalk() {
    let utterThis = new SpeechSynthesisUtterance(talkField.value);

    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === voiceSelect.options[voiceSelect.selectedIndex].dataset.name) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    utterThis.addEventListener("start", ()=>{talkImg.src = "assets/images/smiling-open.png";});
    utterThis.addEventListener("end", ()=>{talkImg.src = "assets/images/smiling.png";});
  }
}