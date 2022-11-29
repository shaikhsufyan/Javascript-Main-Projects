//  making function

 const  button=document.getElementById("btn");
 

function  randomNum(){
    
    let value= "0123456789ABCDEF";
    let cons="#";

    for(i=0; i<6; i++){
    cons=cons + value[Math.floor (Math.random() *16)];
     
    }
     return cons;
    

} 

function btnClick(){
     document.body.style.backgroundColor=randomNum();
}

console.log(randomNum());
 
console.log(Math.random());