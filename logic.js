var gem = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var startGame = function() {
 
  currentScore = 0;
 
  targetScore = getRandom(19, 120);
 
  gem.blue.value = getRandom(1, 12);
  gem.red.value = getRandom(1, 12);
  gem.green.value = getRandom(1, 12);
  gem.yellow.value = getRandom(1, 12);
 
  $("#your-score").html(currentScore);
  $("#target-score").html(targetScore);
  
};

var checkWin = function() {

  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    lossCount++;
    $("#loss-count").html(lossCount);
    startGame();
  }
  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    winCount++;
    $("#win-count").html(winCount);
    startGame();
  }
};
var addValues = function(clickedgem) {
  // Change currentScore
  currentScore += clickedgem.value;
  // Change the HTML to reflect changes in currentScore
  $("#your-score").html(currentScore);
  // Call the checkWin Function
  checkWin();
  // Testing Console
  console.log("Your Score: " + currentScore);
};
// MAIN PROCESS
// =================================================================
// Starts the Game the First Time.
startGame();
$("#blue").click(function() {
  addValues(gem.blue);
});
$("#red").click(function() {
  addValues(gem.red);
});
$("#green").click(function() {
  addValues(gem.green);
});
$("#yellow").click(function() {
  addValues(gem.yellow);
});