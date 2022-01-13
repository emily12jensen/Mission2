

function gradecalc() {
    var assignments = $('#assignments').val();
    var groupProject = $('#groupProject').val();
    var quizzes = $('#quizzes').val();
    var exams = $('#exams').val();
    var intex = $('#intex').val();
    var fAverage = (assignments * .55) + (groupProject * .05) + (quizzes * .1)
        + (exams * .2) + (intex * .1);
    var sLetterGrade;


    if (fAverage >= 94) {
        sLetterGrade = "A"
    }
    else if (fAverage >= 90) {
        sLetterGrade = "A-"
    }
    else if (fAverage >= 87) {
        sLetterGrade = "B+"
    }
    else if (fAverage >= 84) {
        sLetterGrade = "B"
    }
    else if (fAverage >= 80) {
        sLetterGrade = "B-"
    }
    else if (fAverage >= 77) {
        sLetterGrade = "C+"
    }
    else if (fAverage >= 74) {
        sLetterGrade = "C"
    }
    else if (fAverage >= 70) {
        sLetterGrade = "C-"
    }
    else if (fAverage >= 67) {
        sLetterGrade = "D+"
    }
    else if (fAverage >= 64) {
        sLetterGrade = "D"
    }
    else if (fAverage >= 60) {
        sLetterGrade = "D-"
    }
    else {
        sLetterGrade = "E"
    }

    output = 'Your final grade is: ' + sLetterGrade
    document.getElementById("outputGrade").innerHTML = output;

}


    
output = 'Your final grade is: ' + sLetterGrade
document.getElementById("outputGrade").innerHTML = output;

