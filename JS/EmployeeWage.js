/// Welcome To Employe wage program ///
console.log("Welcome To Employe wage program using JS");
/// uc1 - Check employee is present or not ///
const IS_FULL_TIME=1;
const IS_PART_TIME=2;
const EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HRS=160;

let empHrs=0;
let totalEmpHrs=0,day=0;
let empWage=0,totalEmpWage=0;

/// Calculate daily eage using Function
function GetEmpHours(empInput)
{
/// uc2 - calculate emp wage 
    switch(empInput)
    {
        case IS_FULL_TIME:
            //console.log("Employee present full time");
            return empHrs=8;
            
        case IS_PART_TIME:
            //console.log("Employee present part time");
            return empHrs=4;
            
        default:
            //console.log("Employee is absent");
            return empHrs=0;
    }
}

while(day<=MAX_WORKING_DAYS && totalEmpHrs<=MAX_WORKING_HRS)
{
    let empInput=Math.floor((Math.random()*10)%3);
    empWage=EMP_RATE_PER_HR*GetEmpHours(empInput);
    //console.log("day "+day+" wage is "+(empHrs*EMP_RATE_PER_HR))
    totalEmpHrs+=empHrs;
    day++;
}
totalEmpWage=totalEmpHrs*EMP_RATE_PER_HR;
console.log("Total Employee wage for "+(day-1)+" days or "+(totalEmpHrs)+" working Hrs is:"+totalEmpWage);