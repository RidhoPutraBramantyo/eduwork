function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

let numberOfRound = 5;

function startGame() {
  alert("Selamat datang di Game Tebak Angka!");
  alert("Setiap pemain harus menebak angka dari 1 hingga 3.");

  let player1Score = 0;
  let player2Score = 0;

  for (let round = 1; round <= numberOfRound; round++) {
    alert(`Putaran ${round}`);

    let player1Guess;

    do {
      player1Guess = prompt("Player 1, tebak angka (1-3):");
      player1Guess = parseInt(player1Guess);
    } while (isNaN(player1Guess) || player1Guess < 1 || player1Guess > 3);

    let player2Guess;

    do {
      player2Guess = prompt("Player 2, tebak angka (1-3):");
      player2Guess = parseInt(player2Guess);

      if (isNaN(player2Guess) || player2Guess < 1 || player2Guess > 3) {
        alert("Masukkan angka yang valid (1-3) untuk Player 2!");
      }
    } while (isNaN(player2Guess) || player2Guess < 1 || player2Guess > 3);

    let targetNumber = getRandomNumber();
    alert("Angka yang harus ditebak: " + targetNumber);

    if (player1Guess === targetNumber) {
      alert("Player 1 benar!");
      player1Score++;
    } else {
      alert("Player 1 salah!");
    }

    if (player2Guess === targetNumber) {
      alert("Player 2 benar!");
      player2Score++;
    } else {
      alert("Player 2 salah!");
    }
  }

  alert(
    `Game over!\nSkor akhir:\nPlayer 1: ${player1Score}\nPlayer 2: ${player2Score}`
  );

  let playAgain = confirm("Apakah ingin bermain lagi?");
  if (playAgain) {
    player1Score = 0;
    player2Score = 0;
    startGame();
  } else {
    alert("Terima kasih telah bermain!");
  }
}

startGame();
