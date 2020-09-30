function Question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

// Question Prototype

Question.prototype.checkAnswer = function (answer) {
	return this.answer === answer;
};

//Quiz Constructor

function Quiz(questions) {
	this.questions = questions;
	this.score = 0;
	this.questionIndex = 0;
}
//Quiz prototype

Quiz.prototype.getQuestion = function () {
	return this.questions[this.questionIndex];
};
//Quiz isFinish

Quiz.prototype.isFinish = function () {
	return this.questions.length === this.questionIndex;
};
//Quizz quess

Quiz.prototype.guess = function (answer) {
	var question = this.getQuestion();
	if (question.checkAnswer(answer)) {
		this.score++;
	}
	this.questionIndex++;
};

var q1 = new Question(
	"What's the best programming language?",
	["C#", "pyhton", "javascript", "asp.net"],
	"javascript",
);
var q2 = new Question(
	"what's the most popular programming language",
	["pyhton", "C#", "javascript", "visual basic"],
	"javascript",
);
var q3 = new Question(
	"what's the best modern programming language ? ",
	["C#", "javascript", "pyhton", "asp.net"],
	"javascript",
);

const questions = [q1, q2, q3];

//start quizz

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
	if (quiz.isFinish()) {
		showScore();
	} else {
		var question = quiz.getQuestion();
		var choices = question.choices;

		document.querySelector("#question").textContent = question.text;

		for (var i = 0; i < choices.length; i++) {
			var element = document.querySelector("#choice" + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}
	}
}
function guess(id, guess) {
	var btn = document.getElementById(id);
	console.log(id);
	btn.onclick = function () {
		quiz.guess(guess);
		loadQuestion();
	};
}

function showScore() {}
