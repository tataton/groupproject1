var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

console.log("JavaScript sourced.");

//function
var showMeTheMoney = function(anEmployee) {
  var rating = anEmployee[3];
  var salary = anEmployee[2];
  var empNum = anEmployee[1];
  var salaryIncrement = 0;
  if (rating === 3) {
    salaryIncrement += 0.04;
  } else if (rating === 4) {
    salaryIncrement += 0.06;
  } else if (rating === 5) {
    salaryIncrement += 0.10;
  }
  if (empNum.length == 4) {
    salaryIncrement += 0.05;
  }
  if (salary > 65000) {
    salaryIncrement -= 0.01;
  }
  if (salaryIncrement > 0.13) {
    salaryIncrement = 0.13;
  }
  if (salaryIncrement < 0) {
    salaryIncrement = 0;
  }
};
