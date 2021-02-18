// Setting high score list as variables for manipulation 

var scoreList = document.querySelector("#highscore-list");

var highscores = {
  initials : [],
  score: [],
}

function getScores() {
  var storedHighscoresString = localStorage.getItem("highscores");

  if (storedHighscoresString !== null) {
    // Turning the high score string into a list
    var storedHighscores = JSON.parse(storedHighscoresString);
    highscores.initials = storedHighscores.initials;
    highscores.scores = storedHighscores.scores;
  }
  else {
    highscores.initials = [];
    highscores.scores = [];
  }
}

function renderScores() {
  scoreList.innerHTML = "";

  getScores();

  for (var i = 0; i < highscores.initials.length; i++) {
    var list 
    var 
    p 
    p 

    list 
    scoreList
  }
}
  function saveScore (newInitials, newScore) {
    getScores();

    highscores.initials.push(newInitials);
    highscores.scores.push(newScore);

    var storedHighscoresString = JSON.stringify(highscores);
    localStorage.setItem("highscores", highscoresString);
  }

  // This function clears the local storage of the high scores including the initials and scores.
function clearScores() {
  localStorage.removeItem("highscores");
  renderScores();
}

if (scoreList !== null) {
  renderScores();
}