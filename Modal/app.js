

let signup=document.querySelector("#signup")
let close = document.querySelector(".xmark");


signup.addEventListener("click", () => {
  document.querySelector(".modal-form").style.display = "flex";
  document.querySelector(".registeration").style.display = "flex";
});

close.addEventListener("click", () => {
  document.querySelector(".modal-form").style.display = "none";
  document.querySelector(".registeration").style.display = "none";
});



//Smooth Scrolling
document.querySelector("#home-link").addEventListener('click',()=>{
  document.querySelector(".home").scrollIntoView({behavior:"smooth"});
})
document.querySelector("#about-link").addEventListener("click", () => {
  document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#portfolio-link").addEventListener("click", () => {
  document.querySelector(".portfolio").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#contact-link").addEventListener("click", () => {
  document.querySelector(".contact").scrollIntoView({ behavior: "smooth" });
});

window.addEventListener('scroll',()=>{

  if(window.scrollY>=200){
    document.querySelector('.navbar').style.backgroundColor="#555"
  }
  else {
    document.querySelector(".navbar").style.backgroundColor = "#333";
  }
  
  if(window.scrollY>450){
    document.querySelector('.top').style.display="flex"
  }
  else{
    document.querySelector('.top').style.display="none"
  }
})
  document.querySelector(".top").addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  })



// const scroll=(classValue)=>{

//     document.querySelector(classValue).scrollIntoView({ behavior: "smooth" });
// }
