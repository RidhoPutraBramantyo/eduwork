function startGame() {
  alert("Selamat datang di Game Tebak Angka!");
  alert("Setiap pemain harus menebak angka dari 1 hingga 3.");

  while (true) {
    let player1Guess = prompt("Player 1, tebak angka (1-3):");
    player1Guess = parseInt(player1Guess);

    if (isNaN(player1Guess) || player1Guess < 1 || player1Guess > 3) {
      alert("Masukkan angka yang valid (1-3)!");
      continue;
    }

    let player2Guess = prompt("Player 2, tebak angka (1-3):");
    player2Guess = parseInt(player2Guess);

    if (isNaN(player2Guess) || player2Guess < 1 || player2Guess > 3) {
      alert("Masukkan angka yang valid (1-3)!");
      continue;
    }

    let targetNumber = Math.floor(Math.random() * 3) + 1;
    alert("Angka yang harus ditebak: " + targetNumber);

    if (player1Guess === targetNumber) {
      alert("Player 1 benar!");
    } else {
      alert("Player 1 salah!");
    }

    if (player2Guess === targetNumber) {
      alert("Player 2 benar!");
    } else {
      alert("Player 2 salah!");
    }

    let playAgain = confirm("Apakah ingin bermain lagi?");
    if (!playAgain) {
      alert("Terima kasih telah bermain!");
      break;
    }
  }
}

startGame();
