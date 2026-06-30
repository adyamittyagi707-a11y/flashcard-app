let flashcards = [
  { question: "What is HTML?", answer: "Markup language" },
  { question: "What is CSS?", answer: "Styling language" },
  { question: "What is a code?", answer: "In programming, code refers to a set of instructions or commands written in a programming language that a computer can understand and execute." }
];

let currentIndex = 0;
let showAnswer = false;

function displayCard() {
  if (flashcards.length === 0) {
    document.getElementById("card").innerText = "No cards available";
    return;
  }

  const card = flashcards[currentIndex];
  document.getElementById("card").innerText =
    showAnswer ? card.answer : card.question;
}

function toggleAnswer() {
  showAnswer = !showAnswer;
  displayCard();
}

function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    showAnswer = false;
    displayCard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    showAnswer = false;
    displayCard();
  }
}

function addCard() {
  const q = document.getElementById("questionInput").value;
  const a = document.getElementById("answerInput").value;

  if (q && a) {
    flashcards.push({ question: q, answer: a });
    document.getElementById("questionInput").value = "";
    document.getElementById("answerInput").value = "";
    alert("Card added!");
  }
}

function deleteCard() {
  if (flashcards.length > 0) {
    flashcards.splice(currentIndex, 1);
    currentIndex = 0;
    displayCard();
  }
}

function editCard() {
  let newQ = prompt("Edit question:");
  let newA = prompt("Edit answer:");

  if (newQ && newA) {
    flashcards[currentIndex] = { question: newQ, answer: newA };
    displayCard();
  }
}

displayCard();