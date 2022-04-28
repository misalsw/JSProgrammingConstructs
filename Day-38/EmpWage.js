//constant variables
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_WAGE_PHR = 20;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

//temp variables
let empHrs = 0;
let totalWorkingHrs = 0;
let totalWorkingDays = 0;

/** getting employee hours **/
function getEmpHrs(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HRS;
      break;
    case IS_FULL_TIME:
      return FULL_TIME_HRS;
      break;
    default:
      return IS_ABSENT;
  }
}

while (
  totalWorkingHrs <= MAX_HRS_IN_MONTH &&
  totalWorkingDays < NUM_OF_WORKING_DAYS
) {
  totalWorkingDays++;

  let empCheck = Math.floor(Math.random() * 3);
  empHrs += getEmpHrs(empCheck);
}

let empWage = empHrs * EMP_WAGE_PHR; //Calculating wage.
console.log(
  "Total Days :- " +
    totalWorkingDays +
    " Employee Hours :- " +
    empHrs +
    " & Employee Wage :- " +
    empWage
);