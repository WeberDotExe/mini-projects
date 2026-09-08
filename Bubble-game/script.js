function bubblemaker() {
  var clutter = "";
  for (let i = 0; i < 144; i++) {
    var randomnumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomnumber}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}
var timer = 60;
function runtime() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerid").innerHTML = timer;
    } else {
      clearInterval(timeint);
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game Over <br> your scored ${score} points</h1>`;
    }
  }, 1000);
}
var rn = 0;
function hit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerHTML = rn;
}

var score = 0;
function scoreval() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNumber = Number(dets.target.innerHTML);
  
  if (clickedNumber === rn) {
    scoreval();
    bubblemaker();
    hit();
  }
});

runtime();
bubblemaker();
hit();
