const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_WAGE_PHR = 20;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;

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

let empCheck = Math.floor(Math.random() * 3);

let empWage = getEmpHrs(empCheck) * EMP_WAGE_PHR; //Calculating wage.
console.log("Employee Wage :- " + empWage);