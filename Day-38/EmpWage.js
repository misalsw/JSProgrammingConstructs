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
let totEmpWage = 0;
let dailyCntr = 0;
let empDailyWageArr = new Array();
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);

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

// Array Helper Function
// Calc UC-7 total Wage using Array forEach transversal or reduce method

function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +
"  Total Hrs: "+ totalWorkingHrs + " Emp Wage: " + totEmpWage);

//UC 7B - Show the Day along with Daily Wage Using Array Map Helper Function
function mapDayWithWage(dailyWage) {
  dailyCntr++;
  return dailyCntr + " = " + dailyWage;
}
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

// UC - 7C Show Days when Full time Wage of 160 were Earned
function fulltimeWage(dailyWage) {
  return dailyWage.includes("160");
}
console.log("UC7C - Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);

// UC-7D - FIND THE fIRST Occurrence when full Time Wage was Earned Using Find Function
function findFulltimeWage(dailyWage) {
  return dailyWage.includes("160");
}
console.log("UC 7D - First time Fulltome wage was earned on day: " +
              mapDayWithWageArr.find(findFulltimeWage));

 // UC-7E 
 function isAllFulltimeWage(dailyWage) {
      return dailyWage.includes("160");
 }             
 console.log("UC 7E - Check All Element have Full Time Wage: " +
              mapDayWithWageArr.find(findFulltimeWage));

  // UC-7F
  function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
  }            
  console.log("UC 7F - Check If Any Part Time Wage: " +
              mapDayWithWageArr.some(isAnyPartTimeWage));

  // UC 7G
  function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
  }            
  console.log("UC 7G - No of Days emp Worked: " +
  empDailyWageArr.reduce(totalDaysWorked, 0));



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