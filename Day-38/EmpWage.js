const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_WAGE_PHR = 20;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 3);
switch (empCheck) {
  case IS_PART_TIME:
    empHrs = PART_TIME_HRS;
    break;
  case IS_FULL_TIME:
    empHrs = FULL_TIME_HRS;
    break;
  default:
    empHrs = 0;
}
let empWage = empHrs * EMP_WAGE_PHR;
console.log("Employee Wage :- " + empWage);