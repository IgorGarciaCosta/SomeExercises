/*
Esse código utiliza palavras chave obtidas pelo terminal para
manipular listas de nomes. 
*/
const prompt = require('prompt-sync')();

var grade1 = ['aaa'];
var grade2 = ['igor', 'marcos', 'paulo', 'marina'];
var grade3 = ['mollu', 'ua', 'yui', 'pingas'];

class GradeSchool {

  interpreterter(recebido) {
    var question = [];
    question = recebido.split(' ');
    var grade = question[question.length - 1]//aqui pega o número da
    if (question.includes("add")) {//expected template: "Add Jim to grade 2."
      this.add(grade, question);
    }
    else if (question.includes("list")) {
      this.list(grade);
    }
    else if (question.includes("all")) {
      this.listAll()
    }
    else {
      console.log("invalid answer")
    }
  }

  list(grade) {
    var joined;
    switch (grade) {
      case '1':
        joined = grade1.join()
        if (joined == '') {
          console.log("Theres no one in this grade\n")
        }
        else if (grade1.length == 1) {
          console.log("Theres just " + grade1 + " in this grade\n")
        }
        else {
          console.log(grade1)
        }
        break;

      case '2':
        joined = grade2.join()
        if (joined == '') {
          console.log("Theres no one in this grade\n")
        }
        else if (grade2.length == 1) {
          console.log("Theres just " + grade2 + " in this grade\n")
        }
        else {
          console.log(grade2)
        }
        break;

      case '3':
        joined = grade3.join()
        if (joined == '') {
          console.log("Theres no one in this grade\n")
        }
        else if (grade3.length == 1) {
          console.log("Theres just " + grade3 + " in this grade\n")
        }
        else {
          console.log(grade3)
        }
        break;

      default:
        break;
    }
  }

  add(grade, question) {
    switch (grade) {
      case '1':
        grade1 = grade1.concat(question[1]);
        break;

      case '2':
        grade2 = grade2.concat(question[1]);
        break;

      case '3':
        grade3 = grade3.concat(question[1])
        break;

      default:
        break;
    }

    console.log("OK\n")
  }

  listAll() {
    grade1 = grade1.sort();
    grade2 = grade2.sort();
    grade3 = grade3.sort();

    var allGrades = grade1.concat(grade2)
    allGrades = allGrades.concat(grade3)
    allGrades = allGrades.sort()

    console.log("Let me think, we have ");
    console.log(grade1)
    console.log("in grade 1, ");
    console.log(grade2)
    console.log("in grade 2, and ");
    console.log(grade3)
    console.log(" in grade 3, ")

    console.log("So, the answer is: ")

    for (let l = 0; l < allGrades.length; l++) {
      console.log(allGrades[l] + " ")
    }

  }
}

while (true) {
  var grade = new GradeSchool();
  var resp = prompt("Type your question: ")
  grade.interpreterter(resp);
}
