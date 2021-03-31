var score;
score = 0

var wrongButtonList;
wrongButtonList = document.getElementsByClassName("False");

var rightButtonList;
rightButtonList = document.getElementsByClassName("Correct");

function q1correct() {
score= score + 1
document.getElementsByClassName("score")[0].innerHTML = score;
answer1()
}

function q1wrong() {
    answer1()
}

function q2correct() {
    score= score + 1
    document.getElementsByClassName("score")[0].innerHTML = score;
    answer2()
}
    
function q2wrong() {
        answer2() 
}

function q3correct() {
    score= score + 1
    document.getElementsByClassName("score")[0].innerHTML = score;
    answer3()
}
    
function q3wrong() {
        answer3()     
}

function q4correct() {
    score= score + 1
    document.getElementsByClassName("score")[0].innerHTML = score;
    answer4()
}
    
function q4wrong() {
        answer4()
}

function q5correct() {
    score= score + 1
    document.getElementsByClassName("score")[0].innerHTML = score;
    answer5()
}
    
function q5wrong() {
        answer5()      
}

function q6correct() {
    score= score + 1
    document.getElementsByClassName("score")[0].innerHTML = score;
    answer6()
}
    
function q6wrong() {
        answer6()      
}

function answer1() {
    for (var wrongButton of wrongButtonList) {
        if (wrongButton.classList.contains("question1")) {
            wrongButton.classList.add("Red");
            wrongButton.disabled = true;
        }
    }
    for (var CorrectButton of rightButtonList) {
        if (CorrectButton.classList.contains("question1")) {
            CorrectButton.classList.add("Green");
            CorrectButton.disabled = true;
        }
    }
}
function answer2() {
    for (var wrongButton of wrongButtonList) {
        if (wrongButton.classList.contains("question2")) {
            wrongButton.classList.add("Red");
            wrongButton.disabled = true;
        }
    }
    for (var CorrectButton of rightButtonList) {
        if (CorrectButton.classList.contains("question2")) {
            CorrectButton.classList.add("Green");
            CorrectButton.disabled = true;
        }
    }
}
function answer3() {
    for (var wrongButton of wrongButtonList) {
        if (wrongButton.classList.contains("question3")) {
            wrongButton.classList.add("Red");
            wrongButton.disabled = true;
        }
    }
    for (var CorrectButton of rightButtonList) {
        if (CorrectButton.classList.contains("question3")) {
            CorrectButton.classList.add("Green");
            CorrectButton.disabled = true;
        }
    }
}
function answer4() {
    for (var wrongButton of wrongButtonList) {
        if (wrongButton.classList.contains("question4")) {
            wrongButton.classList.add("Red");
            wrongButton.disabled = true;
        }
    }
    for (var CorrectButton of rightButtonList) {
        if (CorrectButton.classList.contains("question4")) {
            CorrectButton.classList.add("Green");
            CorrectButton.disabled = true;
        }
    }
}
function answer5() {
    for (var wrongButton of wrongButtonList) {
        if (wrongButton.classList.contains("question5")) {
            wrongButton.classList.add("Red");
            wrongButton.disabled = true;
        }
    }
    for (var CorrectButton of rightButtonList) {
        if (CorrectButton.classList.contains("question5")) {
            CorrectButton.classList.add("Green");
            CorrectButton.disabled = true;
        }
    }
}
function answer6() {
    for (var wrongButton of wrongButtonList) {
        if (wrongButton.classList.contains("question6")) {
            wrongButton.classList.add("Red");
            wrongButton.disabled = true;
        }
    }
    for (var CorrectButton of rightButtonList) {
        if (CorrectButton.classList.contains("question6")) {
            CorrectButton.classList.add("Green");
            CorrectButton.disabled = true;
        }
    }
}