//https://simplestepscode.com/javascript-quiz-tutorial/#step1
//https://codepen.io/taniabatista/pen/brzBMV

//quizdiv = quiz
//submitresultsdiv = submit
//displayingresultsdiv = results

A. GENERATE THE QUIZ WITH FUNCTIONS

//create a function to generate quiz
//inputs: 1questions, 2container to put Qs, 3container to put results, 4submit button
function generateQuiz(questions1, quizcontainer2, resultscontainer3, submitButton4){

 //1. function to show all the questions
  function showQuestions1(questions1, quizcontainer2){
    //code
  }

 //1. output show questions
  showQuestions1(questions1, quizcontainer2);

//2. function to show all the results
	function showResults2(questions1, quizcontainer2, resultscontainer3){
		// code will go here
	}

//2. output results when user clicks submit button
	submitButton4.onclick = function(){
		showResults2(questions1, quizcontainer2, resultscontainer3); }
}

B. STORE THE QUESTIONS
/*we first need the questions:*/
var myQuestions = [
{   question: "1. how often u flush?",
    answers:
    { a: "always",
      b: "sometimes",
      c: "seldom",
      d: "never"
     },
    correctAnswer: "c"
},
 {  question: "2. u like recycling",
    answers:
    { a: "4",
      b: "3",
      c: "2",
      d: "1"
     },
    correctAnswer: "d"
},
{  question: "3. where do you draw the line at meat?",
    answers:
    { a: "puppies",
      b: "cows",
      c: "cheese",
      d: "eggs"
     },
    correctAnswer: "d"
}
];

SHOW THE QUESTIONS
/*find a way to actually show questions*/
function showQuestions1(questions1, quizcontainer2){
  //var array to store the output:
  var output = [];
  //var to store answer choices... into array below
  var answers;

	/* add a loop so the subsequent steps will happen for each question:*/
  for(var i=0; i<questions1.length; i++){
    //first deal with answers: reset list of answers
     answers = [];
    //then add HTML radio button to each
		for(letter in questions1[i].answers){
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions1[i].answers[letter]
				+ '</label>'
			);
  }
//add this question and its answers to the output:
		output.push(
			'<div class="question">' + questions1[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

//last: the "output list" has to be 1 string of HTML. Put it on the page.
  	quizcontainer2.innerHTML = output.join('');
}

//run the function:
showQuestions1(questions1, quizcontainer2);

C. ON SUBMIT, SHOW RESULTS
/*
//For each question, find the selected answer
//If the answer is correct, respond accordingly.
//If the answer is wrong, respond accordingly
//Show the number of correct answers out of the total
*/

function showResults2(questions1, quizContainer2, resultsContainer3){

  // answer containers from quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');

	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;

// for each question answer right or wrong?
	for(var i=0; i<questions.length; i++){

    // 1. find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    //2. if answer is correct: tally, green
if(userAnswer===questions[i].correctAnswer){
    // 3. add to number of correct answers
			numCorrect++;
		// 4. color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}

		// 2. if answer is wrong or blank
		else{
		// 3. color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

// THEN show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions1.length;
}

//Show quiz results on submit
submitButton4.onclick = function(){
	showResults2(questions1, quizcontainer2, resultscontainer3);
}

D. PUT IT ALL TOGETHER
/*D. */
//questions are hiding in myQuestions
//connect JS to the HTML elements: quiz, results, and submit

var quizcontainer2 = document.getElementById('quizdiv');
var resultscontainer3 = document.getElementById('submitresultsdiv');
var submitButton4 = document.getElementById('displayingresultsdiv');

//Generate the quiz!
generateQuiz(myQuestions, quizcontainer2, resultscontainer3, submitButton4);
