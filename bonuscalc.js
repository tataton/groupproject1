var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

var showMeTheMoney = function(anEmployee) {
  var rating = anEmployee[3];
  var salary = anEmployee[2];
  var empNum = anEmployee[1];
  var empName = anEmployee[0];
  var salaryIncrement = 0;//represents the bonus which has been converted from percentage to decimal form
  if (rating === 3) {
    salaryIncrement += 0.04;
  } else if (rating === 4) {
    salaryIncrement += 0.06;
  } else if (rating === 5) {
    salaryIncrement += 0.10;
  }
  //4 digit employee number gives an additional 5 percent increase
  if (empNum.length == 4) {
    salaryIncrement += 0.05;
  }//end 4 digit employee number gives an additional 5 percent increase

  //salaries greater than 65,000 decrease raise by 1 percent
  if (salary > 65000) {
    salaryIncrement -= 0.01;
  }//end salaries greater than 65,000 decrease raise by 1 percent

  //max salary raise is 13 percent
  if (salaryIncrement > 0.13) {
    salaryIncrement = 0.13;
  }//end max salary raise is 13 percent

  if (salaryIncrement < 0) {
    salaryIncrement = 0;
//    alert ("Sorry, no raise for you this year");
  }

  var totalBonus = salary * salaryIncrement;
  var newSalary = Number(salary) + totalBonus;
  return [empName, salaryIncrement, newSalary, totalBonus];
};

//testing employee variables
for (var i = 0; i < employees.length; i++) {
  console.log(showMeTheMoney(employees[i]));
}
//console.log(showMeTheMoney(atticus));
// console.log(showMeTheMoney(jem));
// console.log(showMeTheMoney(boo));
// console.log(showMeTheMoney(scout));
// console.log(showMeTheMoney(robert));
// console.log(showMeTheMoney(mayella));
//end testing employee variables

//connect search button
// function webReport() {
//     var searchBox = document.getElementById("employeeName").value;
//     console.log( searchBox );
//     yourBonus = showMeTheMoney(searchBox);
//     console.log( yourBonus );
//     document.getElementById("result").innerHTML = yourBonus[0];
// }
