let Ages= 2022;
let days=365;
let button=document.getElementById("btn");
button.addEventListener("click", AgeCheck);

 

function AgeCheck(){
    // let input=document.getElementById("age-input").value;
    // let month=document.getElementById("month").value;
    // let date=document.getElementById("date").value;
     
    // // find age in years
    //  let value=input-Ages;

    // //  for find age in month
    //  let monthValue=month-12;
    //  let monthAge=monthValue+value*12;
      

    // //  find age in days
    // let ageDays=days*value;
    // let dateAge=date-30;
    // let dateValue=dateAge+monthValue*30;
    // let daysAll=dateValue+ageDays;

     
 
    //  console.log("Your Age is"+value);
     
    //  console.log("month is"+monthAge);
    //  console.log("Age in Day is"+daysAll);


     let dob=document.getElementById("new").value;
     console.log(dob);
     let year=parseInt(dob.substring(0,4));
     let mnth=parseInt(dob.substring(5,7));
     let dat=parseInt(dob.substring(8,10));
     let date=new Date() ;
     let curYear=date.getFullYear()
     let curMonth=date.getMonth()
     let curDate=date.getDate();
     

    //  Calculation for Year
     let YearAdd=curYear-year;

    //  Calculation for month
     let inputMonth=12-mnth;
     let month=12-(curMonth);
     let monthAdd=inputMonth-month;

    // Calculation for date
     let inputDate=30-dat;
     let Dates=30-curDate;
     let DateAdd= Dates+inputDate;
      
        // year 
     console.log("In Years : "+ YearAdd);
    
      //Month
     console.log( "In Month : "+ monthAdd);

     //Date
     console.log("In Date : "+DateAdd);
     
      
     console.log(curDate);
 
     
      

      

      
    

}
 
 
  