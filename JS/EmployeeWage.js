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
//uc6 store daily wage in array
let empDailyWageArray=new Array();
//uc 10 - array for storing objects
let dayWithWageAndHrsArray=new Array();
//uc8 emp wage using map
let empdaywithWageMap=new Map();
let empDayWithHrsMap=new Map();

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
///uc5 calculate wagw till max working days or hrs reached
while(day<=MAX_WORKING_DAYS && totalEmpHrs<=MAX_WORKING_HRS)
{
    let empInput=Math.floor((Math.random()*10)%3);
    empWage=EMP_RATE_PER_HR*GetEmpHours(empInput);
    //console.log("day "+day+" wage is "+(empHrs*EMP_RATE_PER_HR))
    totalEmpHrs+=empHrs;
    //adding empWage and day to map
    empdaywithWageMap.set(day,empWage);

    //adding day and empHrs to map
    empDayWithHrsMap.set(day,empHrs);
    //adding daily wage to array
    empDailyWageArray.push(empWage);

    dayWithWageAndHrsArray.push (
        {
            DayNum:day,
            Wage:empWage,
            Hours:empHrs,
            toString()
            {
                return "\nFor day : "+this.DayNum+" => Wage is:"+this.Wage+" Hours is:"+this.Hours;
            }
        }
    );
    day++;
}

// printing daily wage array
console.log("employee daily wage is :\n"+empDailyWageArray);

totalEmpWage=totalEmpHrs*EMP_RATE_PER_HR;
console.log("Total Employee wage for "+(day-1)+" days or "+(totalEmpHrs)+" working Hrs is:"+totalEmpWage);

/* uc7 Use the Daily Wage Array perform following operations using Array Helper Functions
7a) Calc total Wage using Array forEach method */
let total=0;
function getTotalWage(dailyWage)
{
    total+=dailyWage;
}
empDailyWageArray.forEach(getTotalWage);
console.log("7-a Total Wage using Array forEach helper func: "+total)

//7b) Calc total Wage using Array reduce method
function getTotalWageUsingReduce(dailyWage,totalWage)
{
    return totalWage+=dailyWage;
}
console.log("7-a Total Wage using Array reduce helper func : "+empDailyWageArray.reduce(getTotalWageUsingReduce,0));

//7b. Show the Day along with Daily Wage using Array map helper function
let dayCount=0;
function mapDayWithWage(dailyWage)
{
    dayCount++;
    return "Day:"+dayCount+" Wage:"+dailyWage;
}
let mapDayWithWageArray=empDailyWageArray.map(mapDayWithWage);
console.log("uc7b - Show the Day along with Daily Wage using Array map helper function\n");
console.log(mapDayWithWageArray);

//7c. Show Days when Full time wage of 160 were earned using filter function
function showFullzTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArray=mapDayWithWageArray.filter(showFullzTimeWage);     //FILTER checks all data
console.log("UC7 c-Show Days when Full time wage:");
console.log(fullDayWageArray);

//7d. Find the first occurrence when Full Time Wage was earned using find function
function findFirstFullTime(dailyWage)
{
    return dailyWage.includes("160")
}
console.log("uc 7d- first occurrence of Full Time Wage :\n"+mapDayWithWageArray.find(findFirstFullTime));   //FIND checks first occurance

//7e. Check if Every Element of Full Time Wage is truly holding Full time wage
console.log("uc 7e- Check if Every Element of Full Time Wage is truly holding Full time wage:\n"+fullDayWageArray.every(findFirstFullTime));

//7f. Check if there is any Part Time Wage
function isAnyPartTime(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("uc 7f -Check if there is any Part Time Wage :\n"+mapDayWithWageArray.some(isAnyPartTime));

//7g. Calc how many days employee worked
function howManyDaysWorked(days,dailyWage)
{
    if(dailyWage>0)  
        return days=days+1
    else
        return days;
}
console.log("uc 7g - How many days employee worked");
console.log(empDailyWageArray.reduce(howManyDaysWorked,0));

//uc8 calculating empWage using map
console.log("Daily wage in Map object : ");
console.log(empdaywithWageMap);

//UC8 fetching only values and storing into array => then using reduce function calculating total wage
console.log("total wage using Map boject :");
let totalWageByMap=Array.from(empdaywithWageMap.values());
console.log(totalWageByMap.reduce(getTotalWageUsingReduce,0));

//UC9 a.Calc total Wage and total hours worked using 'Arrow' function(Lambda function).
let totalWageByArrow=Array.from(totalWageByMap.values()).filter(wage=>wage>0).reduce(getTotalWageUsingReduce,0);
let totalHours=(totalH,dailyWage)=>
{
    return totalH+dailyWage;
}
let totalHesByArrow=Array.from(empDayWithHrsMap.values()).reduce(totalHours,0);
console.log("Using 'Arrow' function => total Wage is: "+totalWageByArrow+" total hours worked is : "+totalHesByArrow);

//UC9 b. Show the full workings days, part working days and no working days
//creating arrays for storing days
let nonWorkingDays=new Array();
let fullWorkingDays=new Array();
let partWorkingDays=new Array();
//Storing days
empDayWithHrsMap.forEach((value,key,map)=>{
    if(value==0) nonWorkingDays.push(key);
    else if(value==8) fullWorkingDays.push(key);
    else partWorkingDays.push(key);
});
console.log("UC9 b. Showing the full workings days, part working days and no working days");
console.log("Full working days = "+fullWorkingDays);
console.log("Part working days = "+partWorkingDays);
console.log("Non working days ="+nonWorkingDays);

/* Ability to store the Day, Hours Worked and Wage Earned in a single object.*/
console.log("uc 10 - storing the Day, Hours Worked and Wage Earned in a single object."+dayWithWageAndHrsArray);
