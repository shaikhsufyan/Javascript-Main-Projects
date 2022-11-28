 const  QRsrc=document.getElementById("imgsrc");
const button=document.getElementById("bt");
const inpt=document.querySelector("input");
const QRimage=document.getElementsByClassName("qr-image");
 
button.addEventListener("click" ,QR);
 
 
 
  
 async function QR(){ 
    const inputValue=inpt.value;
console.log(inputValue);
    if(inputValue){
     
     
 const src=QRsrc.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
 document.querySelector(".qr-img").style.border="1px solid rgb(189, 189, 189)";
 document.querySelector(".qr-img").style.padding=" 30px 2px";


 
console.log(src);
    }else {
        alert("Please Enter Text or URL")
    }
}
 
 