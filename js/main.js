var nameReq = /^[A-Za-z]*$/;
var emailReq =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var passwordReq = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*? "]).*$/;

var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var emailUser = document.getElementById("email-user");
var passwordUser = document.getElementById("password-user");
var ConfirmPasswordUser = document.getElementById("confirm-password-user");

var loginEmailUser = document.getElementById("login-email-user");
var loginPasswordUser = document.getElementById("login-password-user");

function validateName(element) {
  var flag = false;
  if (nameReq.test(element.value) && element.value != "") {
    document.getElementById(element.id + "-icon").className = "fa fa-check";
    document.getElementById(element.id + "-icon").style.color = "green";
    flag = true;
  } else if (element.value == "") {
    document.getElementById(element.id + "-icon").className = "fa fa-times";
    document.getElementById(element.id + "-icon").style.color = "red";
    flag = false;
  } else {
    document.getElementById(element.id + "-icon").className = "fa fa-times";
    document.getElementById(element.id + "-icon").style.color = "red";
    flag = false;
  }

  return flag;
}

function validateEmail(element) {
  var flag = false;
  if (emailReq.test(element.value) && element.value != "") {
    document.getElementById(element.id + "-icon").className = "fa fa-check";
    document.getElementById(element.id + "-icon").style.color = "green";
    flag = true;
  } else if (element.value == "") {
    document.getElementById(element.id + "-icon").className = "fa fa-times";
    document.getElementById(element.id + "-icon").style.color = "red";
    flag = false;
  } else {
    document.getElementById(element.id + "-icon").className = "fa fa-times";
    document.getElementById(element.id + "-icon").style.color = "red";
    flag = false;
  }
  return flag;
}

function validatePassword(element) {
  var flag = false;
  if (passwordReq.test(element.value) && element.value != "") {
    document.getElementById(element.id + "-icon").className = "fa fa-check";
    document.getElementById(element.id + "-icon").style.color = "green";
    flag = true;
  } else if (element.value == "") {
    document.getElementById(element.id + "-icon").className = "fa fa-times";
    document.getElementById(element.id + "-icon").style.color = "red";
    flag = false;
  } else {
    document.getElementById(element.id + "-icon").className = "fa fa-times";
    document.getElementById(element.id + "-icon").style.color = "red";
    flag = false;
  }

  return flag;
}

function validateConfirmPassword(element) {
  var flag = false;
  var password = document.getElementById("password-user").value;
  if (element.value === password && element.value != "") {
    document.getElementById(element.id + "-icon").className = "fa fa-check";
    document.getElementById(element.id + "-icon").style.color = "green";
    flag = true;
  } else if (element.value == "") {
    document.getElementById(element.id + "-icon").className = "fa fa-times";
    document.getElementById(element.id + "-icon").style.color = "red";
    flag = false;
  } else {
    document.getElementById(element.id + "-icon").className = "fa fa-times";
    document.getElementById(element.id + "-icon").style.color = "red";
    flag = false;
  }
  return flag;
}

function registerForm(e) {
  if (
    validateName(firstName) &&
    validateName(lastName) &&
    validateEmail(emailUser) &&
    validatePassword(passwordUser) &&
    validateConfirmPassword(ConfirmPasswordUser)
  ) {
    var studentData = [
      firstName.value,
      lastName.value,
      emailUser.value,
      passwordUser.value,
    ];
    localStorage.setItem("studentData", JSON.stringify(studentData));
  } else {
    e.preventDefault();
  }
}

function loginForm(e) {
  if (JSON.parse(localStorage.getItem("studentData") !== null)) {
    var studentInfo = JSON.parse(localStorage.getItem("studentData"));
    if (
      studentInfo[2] == loginEmailUser.value &&
      studentInfo[3] == loginPasswordUser.value
    ) {
      localStorage.setItem("studentLogin", "true");
    } else {
      document.getElementById("message-login").style.visibility = "visible";
      e.preventDefault();
    }
  } else {
    document.getElementById("message-login").style.visibility = "visible";
    e.preventDefault();
  }
}

function disableBack() {
  window.history.forward();
}
setTimeout(disableBack(), 0);
window.onunload = function () {
  null;
};

/////////////////////////////// Page Exam ///////////////////////////////////
var allQuestions = [];

function Question(id, question) {
  this.id = id;
  this.question = question;
  this.correctAnswer = "";
  this.answers = [];
}

function Answer(id, answer) {
  this.id = id;
  this.answer = answer;
}

Question.prototype.addAnswer = function (answer) {
  if (answer.constructor != Answer) {
    return;
  }
  this.answers.push(answer);
};

Question.prototype.addCorrectAnswer = function (answer) {
  if (answer.constructor != Answer) {
    return;
  }
  this.correctAnswer = answer.id;
};

var q1 = new Question(1, "Which type of JavaScript language is ___");
var a1 = new Answer(1, "Object-Oriented");
var a2 = new Answer(2, "Object-Based");
var a3 = new Answer(3, "Assembly-language");
var a4 = new Answer(4, "High-level");
q1.addAnswer(a1);
q1.addAnswer(a2);
q1.addAnswer(a3);
q1.addAnswer(a4);
q1.addCorrectAnswer(a2);

allQuestions.push(q1);

var q2 = new Question(2, "Which one of the following also known as Conditional Expression:");
var a5 = new Answer(1, "Alternative to if-else");
var a6 = new Answer(2, "Switch statement");
var a7 = new Answer(3, "If-then-else statement");
var a8 = new Answer(4, "immediate if");

q2.addAnswer(a5);
q2.addAnswer(a6);
q2.addAnswer(a7);
q2.addAnswer(a8);
q2.addCorrectAnswer(a8);
allQuestions.push(q2);

var q3 = new Question(3, "In JavaScript, what is a block of statement?");
var a9 = new Answer(1, "Conditional block");
var a10 = new Answer(2, "block that combines a number of statements into a single compound statement");
var a11 = new Answer(3, "both conditional block and a single statement");
var a12 = new Answer(4, "block that contains a single statement");

q3.addAnswer(a9);
q3.addAnswer(a10);
q3.addAnswer(a11);
q3.addAnswer(a12);
q3.addCorrectAnswer(a10);
allQuestions.push(q3);


var q4 = new Question(4, " When interpreter encounters an empty statements, what it will do:");
var a13 = new Answer(1, "Shows a warning");
var a14 = new Answer(2, "Prompts to complete the statement");
var a15 = new Answer(3, "Throws an error");
var a16 = new Answer(4, "Ignores the statements");

q4.addAnswer(a13);
q4.addAnswer(a14);
q4.addAnswer(a15);
q4.addAnswer(a16);
q4.addCorrectAnswer(a16);
allQuestions.push(q4);


var q5 = new Question(5, "The 'function' and  'var' are known as:");
var a17 = new Answer(1, "Keywords");
var a18 = new Answer(2, "Data types");
var a19 = new Answer(3, "Declaration statements");
var a20 = new Answer(4, "Prototypes");

q5.addAnswer(a17);
q5.addAnswer(a18);
q5.addAnswer(a19);
q5.addAnswer(a20);
q5.addCorrectAnswer(a19);
allQuestions.push(q5);


var q6 = new Question(6, "Which of the following variables takes precedence over the others if the names are the same?");
var a21 = new Answer(1, "Global variable");
var a22 = new Answer(2, "The local element");
var a23 = new Answer(3, "The two of the above");
var a24 = new Answer(4, "None of the above");

q6.addAnswer(a21);
q6.addAnswer(a22);
q6.addAnswer(a23);
q6.addAnswer(a24);
q6.addCorrectAnswer(a22);
allQuestions.push(q6);


var q7 = new Question(7, "Which one of the following is the correct way for calling the JavaScript code?");
var a25 = new Answer(1, "Preprocessor");
var a26 = new Answer(2, "Triggering Event");
var a27 = new Answer(3, "RMI");
var a28 = new Answer(4, "Function/Method");

q7.addAnswer(a25);
q7.addAnswer(a26);
q7.addAnswer(a27);
q7.addAnswer(a28);
q7.addCorrectAnswer(a28);
allQuestions.push(q7);


var q8 = new Question(8, "Which of the following type of a variable is volatile?");
var a29 = new Answer(1, "Mutable variable");
var a30 = new Answer(2, "Dynamic variable");
var a31 = new Answer(3, "Volatile variable");
var a32 = new Answer(4, "Immutable variable");

q8.addAnswer(a29);
q8.addAnswer(a30);
q8.addAnswer(a31);
q8.addAnswer(a32);
q8.addCorrectAnswer(a29);
allQuestions.push(q8);


var q9 = new Question(9, "Which of the following option is used as hexadecimal literal beginning?");
var a33 = new Answer(1, "00");
var a34 = new Answer(2, "0x");
var a35 = new Answer(3, "0X");
var a36 = new Answer(4, "Both 0x and 0X");

q9.addAnswer(a33);
q9.addAnswer(a34);
q9.addAnswer(a35);
q9.addAnswer(a36);
q9.addCorrectAnswer(a36);
allQuestions.push(q9);


var q10 = new Question(10, "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.");
var a37 = new Answer(1, "Prints an exception error");
var a38 = new Answer(2, "Prints an overflow error");
var a39 = new Answer(3, "Displays 'Infinity'");
var a40 = new Answer(4, "Prints the value as such");

q10.addAnswer(a37);
q10.addAnswer(a38);
q10.addAnswer(a39);
q10.addAnswer(a40);
q10.addCorrectAnswer(a39);
allQuestions.push(q10);

//////////////////////////// Show Questions ///////////////////////////////////

var studentAnswer = [];
var correctAnswer = [];
var markedQuestion = [];

for (let i = 0; i < allQuestions.length; i++) {
  studentAnswer.push("");
}

var question = document.getElementById("question");
var answers = document.getElementById("answers");

var currentPage = 1;
var questionPerPage = 1;

function showQuestion(page) {
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var page_span = document.getElementById("page");
  currentPage = page;

  page_span.textContent =
    "( " + currentPage + " Of " + allQuestions.length + " )";

  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  question.textContent = "";
  answers.textContent = "";
  var questionTitle = document.createElement("p");
  questionTitle.classList.add("mb-0");
  questionTitle.textContent = allQuestions[page - 1].question;
  question.append(questionTitle);
  for (var j = 0; j < allQuestions[page - 1].answers.length; j++) {
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "answer" + allQuestions[page - 1].answers[j].id);
    label.classList.add("radio");
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "qusetion" + allQuestions[page - 1].id;
    input.value = allQuestions[page - 1].answers[j].answer;
    input.id = "answer" + allQuestions[page - 1].answers[j].id;
    input.setAttribute("answerid", allQuestions[page - 1].answers[j].id);
    input.addEventListener("change", showSelected);
    label.append(input);
    var span = document.createElement("span");
    span.textContent = allQuestions[page - 1].answers[j].answer;

    label.append(span);
    div.append(label);
    answers.append(div);
    if (
      input.getAttribute("answerid") == studentAnswer[input.name.slice(8) - 1]
    ) {
      input.checked = "checked";
    }
  }

  if (markedQuestion.includes(allQuestions[page - 1].id)) {
    var markedQuestionButton = document.getElementById("markedQuestion");
    markedQuestionButton.href = "javascript:removemarkedquestion()";
    markedQuestionButton.textContent = "Un Mark";
  } else {
    var markedQuestionButton = document.getElementById("markedQuestion");
    markedQuestionButton.href = "javascript:markedquestion()";
    markedQuestionButton.textContent = "Mark";
  }

  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
  }
}

function showSelected() {
  if (this.checked) {
    var index = this.name.slice(8);
    studentAnswer[index - 1] = this.getAttribute("answerid");
  }
}

function startExam() {



if(JSON.parse( localStorage.getItem("studentLogin")) == true) {
  showQuestion(1);

  let startWidth = 0;
  var allTime = 300;
  document.querySelector(".inner").textContent =  "05 : 00"; 
  setInterval(function () {
    if (allTime == 0) {
      studentResult();
      location.href = "result.html";
    }
    var minutes = Math.floor(allTime / 60);
    var seconds = Math.floor( allTime % 60 );
    if(minutes < 10) {
      minutes = "0"+minutes;
    }
    if(seconds < 10) {
      seconds = "0"+seconds;
    }
    document.querySelector(".inner").textContent =  minutes + " : " + seconds; 
    allTime = allTime - 1;
  }, 1000);

  setInterval(function () {    
    document.querySelector("#exam-page .circle").style.backgroundImage = "conic-gradient(#FFCDB2 "+ startWidth + "%, #ff5e13 0)";
    if (startWidth == 100) {
      studentResult();
      location.href = "result.html";
    }
    startWidth += 0.250;
  }, 750);
} else {
  location.href = "index.html"
}

  
}

function numPages() {
  return Math.ceil(allQuestions.length / questionPerPage);
}

function nextPage() {
  if (currentPage < numPages()) {
    currentPage++;
    showQuestion(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showQuestion(currentPage);
  }
}

function markedquestion() {
  markedQuestion.push(currentPage);

  if (markedQuestion.includes(currentPage)) {
    var markedQuestionButton = document.getElementById("markedQuestion");
    markedQuestionButton.href = "javascript:removemarkedquestion()";
    markedQuestionButton.textContent = "Un Mark";
  } else {
    var markedQuestionButton = document.getElementById("markedQuestion");
    markedQuestionButton.href = "javascript:markedquestion()";
    markedQuestionButton.textContent = "Mark";
  }
  showMarkQuestion(markedQuestion);
}

function removemarkedquestion() {
  if (markedQuestion.includes(currentPage)) {
    var markedQuestionButton = document.getElementById("markedQuestion");
    markedQuestionButton.href = "javascript:markedquestion()";
    markedQuestionButton.textContent = "Mark";
  } else {
    var markedQuestionButton = document.getElementById("markedQuestion");
    markedQuestionButton.href = "javascript:removemarkedquestion()";
    markedQuestionButton.textContent = "Un Mark";
  }
  var indexQuestion = markedQuestion.indexOf(currentPage);
  markedQuestion.splice(indexQuestion, 1);

  showMarkQuestion(markedQuestion);
}

function showMarkQuestion(markedQuestion) {
  document.getElementById("numbermarkQuestions").textContent =
    markedQuestion.length;
  var markedQuestionList = document.getElementById("marked-qusestions");
  markedQuestionList.innerHTML = "";
  for (let i = 0; i < markedQuestion.length; i++) {
    var a = document.createElement("a");
    a.classList.add(
      "btn",
      "btn-dark",
      "mb-3",
      "d-flex",
      "flex-row",
      "question-title"
    );
    var h3 = document.createElement("h3");
    h3.classList.add("text-white");
    h3.textContent = "Q.";
    var h5 = document.createElement("h5");
    h5.classList.add("mt-1", "ms-2");
    var li = document.createElement("a");
    li.textContent = markedQuestion[i];
    a.href = "javascript:showQuestion(" + markedQuestion[i] + ")";
    h5.append(li);
    a.append(h3);
    a.append(h5);
    markedQuestionList.append(a);
  }
}

function studentResult() {
  localStorage.setItem("allQuestions", JSON.stringify(allQuestions));
  localStorage.setItem("studentAnswer", JSON.stringify(studentAnswer));
}

function showResult() {
  if(JSON.parse( localStorage.getItem("studentLogin")) == true) {
  var table = document.getElementById("table");
  var result = 0;
  if (JSON.parse(localStorage.getItem("studentData") !== null)) {
    var studentInfo = JSON.parse(localStorage.getItem("studentData"));
  }
  if (

      localStorage.getItem("studentAnswer") !== null &&
        localStorage.getItem("allQuestions") !== null
    
  ) {
    var allQuestions = JSON.parse(localStorage.getItem("allQuestions"));
    var studentAnswer = JSON.parse(localStorage.getItem("studentAnswer"));
    for (var i = 0; i < allQuestions.length; i++) {
      for (var j = 0; j < allQuestions[i].answers.length; j++) {
        if (studentAnswer[i] == allQuestions[i].answers[j].id) {
          var studentAnswerVAlue = allQuestions[i].answers[j].answer;
        }

        if (allQuestions[i].correctAnswer == allQuestions[i].answers[j].id) {
          var correctAnswerValue = allQuestions[i].answers[j].answer;
        }
      }
      if (studentAnswer[i] == allQuestions[i].correctAnswer) {
        result = result + 1;
        var tr = document.createElement("tr");

        tr.innerHTML = `<td> ${allQuestions[i].id} </td> <td> ${allQuestions[i].question} </td> <td> ${studentAnswerVAlue}  </td> <td> ${correctAnswerValue} </td> <td> <i style="color: green" class="fa fa-check"></i> </td>`;

        table.append(tr);
      } else {
        var tr = document.createElement("tr");

        tr.innerHTML = `<td> ${allQuestions[i].id} </td> <td> ${allQuestions[i].question} </td> <td> ${studentAnswerVAlue}  </td> <td> ${correctAnswerValue} </td> <td> <i style="color: red" class="fa fa-times"></i> </td>`;

        table.append(tr);
      }
    }


     document.querySelector(".finalResult .card-title").innerHTML = "Hello "+ studentInfo[0] + " " + studentInfo[1] +  " Your Result Is "+ result;
    
  }
} else {
  location.href = "index.html";
}
}
