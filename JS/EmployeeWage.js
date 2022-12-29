/// Welcome To Employe wage program ///
console.log("Welcome To Employe wage program using JS");
/// uc1 - Check employee is present or not ///
let IS_FULL_TIME=1;
let IS_PART_TIME=2;
let EMP_RATE_PER_HR=20;
let empHrs=0;
let empWage=0;
let empInput=Math.floor((Math.random()*10)%3);

/// Calculate daily eage using Function
function GetEmpHours(empInput)
{
/// uc2 - calculate emp wage 
    switch(empInput)
    {
        case IS_FULL_TIME:
            console.log("Employee present full time");
            return empHrs=8;
            
        case IS_PART_TIME:
            console.log("Employee present part time");
            return empHrs=4;
            
        default:
            console.log("Employee is absent");
            return empHrs=0;
    }
}
empWage=EMP_RATE_PER_HR*GetEmpHours(empInput);
console.log("By function Employee wage is:",empWage);