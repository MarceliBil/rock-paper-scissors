const your_score = document.querySelector(".your_score"),
  computer_score = document.querySelector(".computer_score"),
  your_move = document.querySelector(".your_move"),
  computer_move = document.querySelector(".computer_move"),
  info = document.querySelector(".info "),
  rock = document.querySelector(".rock"),
  paper = document.querySelector(".paper"),
  scissors = document.querySelector(".scissors"),
  buttons = document.querySelectorAll("button");

let your_score_nr = 0,
  computer_score_nr = 0,
  your_options = [rock, paper, scissors],
  computer_options = ["rock", "paper", "scissors"];

your_options.forEach((e) => {
  e.addEventListener("click", () => {
    let your_choice = e.className;

    let computer_choice =
      computer_options[Math.round(Math.random() * (2 - 0)) + 0];

    your_move.textContent = your_choice;
    computer_move.textContent = computer_choice;

    if (
      (your_choice == "rock" && computer_choice == "paper") ||
      (your_choice == "paper" && computer_choice == "scissors") ||
      (your_choice == "scissors" && computer_choice == "rock")
    ) {
      info.textContent = "YOU LOST!";
      computer_score_nr++;
    } else if (your_choice == computer_choice) {
      info.textContent = "DRAW!";
    } else {
      info.textContent = "YOU WON!";

      your_score_nr++;
    }

    your_score.textContent = `Player: ${your_score_nr}`;
    computer_score.textContent = `Computer: ${computer_score_nr}`;
  });
});
