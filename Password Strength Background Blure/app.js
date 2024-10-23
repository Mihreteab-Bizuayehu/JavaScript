

const password = document.querySelector(".password");
const bg=document.querySelector(".bg-image");

password.addEventListener('input',(e)=>{
    const Input=e.target.value;
    const Length=Input.length
    const blurness=20-Length*2;
    bg.style.filter=`blur(${blurness}px)`;
})
