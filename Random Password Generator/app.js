
let input=document.querySelector(".input")
let genBtn = document.querySelector(".btn1");
let copyBtn = document.querySelector(".btn2");

genBtn.addEventListener('click',()=>passwordGenerator())
copyBtn.addEventListener('click',()=>copyPassword())

const passwordGenerator=()=>{

    let charString =
      "abcdefghijklmnopqrstuvwxyz:ABCDEFGHIHKLMNOPQRSTUVWXYZ0123456789;!@#$%^&*()-_=+/\"|?'<,.>`~";
    let passwordLength = 7;
    let password="";

    for(let i=0;i<=passwordLength;i++){
        let randomNumber = Math.round(Math.random() * charString.length);
        password += charString.substring(randomNumber,randomNumber+1)
    }

    input.value = password;
} 

const copyPassword=()=>{
    input.select();
    document.execCommand("copy");

}
