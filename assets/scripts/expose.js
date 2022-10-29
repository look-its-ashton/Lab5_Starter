// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelect = document.getElementById("horn-select");
  let imgSelect = hornSelect.previousElementSibling;
  let playSound = document.querySelector("#expose button");
  let audioSound = document.querySelector("#expose audio");
  let audioSlider = document.querySelector("#volume-controls input");
  let audioSliderImg = document.querySelector("#volume-controls img");
  hornSelect.addEventListener('input', function() {
    switch(hornSelect.value) {
      case "air-horn":
        imgSelect.src = "assets/images/air-horn.svg";
        audioSound.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        imgSelect.src = "assets/images/car-horn.svg";
        audioSound.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        imgSelect.src = "assets/images/party-horn.svg";
        audioSound.src = "assets/audio/party-horn.mp3";
        break;
    }
  });

  audioSlider.addEventListener('change', function () {
    let val = parseInt(audioSlider.value)
    audioSound.volume = val / 100;
    if (audioSlider.value == 0)
    {
      audioSliderImg.src = "assets/icons/volume-level-0.svg";
    }

    else if (val > 0 && val < 33)
    {
      audioSliderImg.src = "assets/icons/volume-level-1.svg";
    }

    else if (val > 32 && val < 67)
    {
      audioSliderImg.src = "assets/icons/volume-level-2.svg";
    }

    else
    {
      audioSliderImg.src = "assets/icons/volume-level-3.svg";
    }
  })

  playSound.addEventListener('click', function() {
    audioSound.play();
  });
}