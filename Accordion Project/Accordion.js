
const faqData = [
    {
      id: 1,
      question: "Who are we?",
      answer:
        "  We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
    },
    {
      id: 2,
      question: "What do we do?",
      answer:"Building learning  communities with Our Affordable  ",
    },
    {
      id: 3,
      question: "Are the community classes boring?",
      answer: "No, not at all!!!              ",
    },
  ];


document.getElementById("q1").innerHTML=faqData[0].question;
document.getElementById("q2").innerHTML=faqData[1].question;
document.getElementById("q3").innerHTML=faqData[2].question;



function myFunction(x) {
    x.classList.toggle("fa-minus");
    var  a= document.getElementById("ans1");  
 
 
   if(a.innerHTML==faqData[0].answer){
    a.innerHTML="";
     
   }
   else{
    a.innerHTML=faqData[0].answer;
   }

      
  }

//   question 2

 

function myFunFirst(x) {
    x.classList.toggle("fa-minus");
    var  a= document.getElementById("ans2");  
 
 
   if(a.innerHTML==faqData[1].answer){
    a.innerHTML="";
     
   }
   else{
    a.innerHTML=faqData[1].answer;
   }

      
  }

//   question 3


function myFunSecond(x) {
    x.classList.toggle("fa-minus");
    var  a= document.getElementById("ans3");  
 
 
   if(a.innerHTML==faqData[2].answer){
    a.innerHTML="";
     
   }
   else{
    a.innerHTML=faqData[2].answer;
   }

      
  }