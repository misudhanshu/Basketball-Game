const home = document.getElementById("home");
const guest = document.getElementById("guest");
const newGame = document.getElementById("new-game");
const homeTitle = document.getElementsByClassName("home-title")

let homeCount = 0;
function homeone() {
  homeCount++;
  home.textContent = homeCount;
}

function hometwo() {
  homeCount += 2;
  home.textContent = homeCount;
}

function homethree() {
  homeCount += 3;
  home.textContent = homeCount;
}

let guestCount = 0;
function guestone() {
  guestCount++;
  guest.textContent = guestCount;
}

function guesttwo() {
  guestCount += 2;
  guest.textContent = guestCount;
}

function guestthree() {
  guestCount += 3;
  guest.textContent = guestCount;
}

function restart() {
  homeCount = 0;
  guestCount = 0;
  home.textContent = 0;
  guest.textContent = 0;
}
