function play(playerChoice) {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  var result = "";

  if (playerChoice === computerChoice) {
    result = "Berabere!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Tebrikler, kazandınız!";
  } else {
    result = "Üzgünüm, kaybettiniz.";
  }

  document.getElementById("result").innerHTML = "Bilgisayarın seçimi: " + computerChoice + "<br>" + result;
}
