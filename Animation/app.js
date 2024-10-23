gsap.to(".green",{
    x:200,
    duration:3,
    repeat:-1,
    rotation:360,
    yoyo:true

})
gsap.from(".orange",{
    x:-200,
    duration:2,
    repeat:-1,
    rotation:-360,
    yoyo:true

})
gsap.fromTo(".red",{
    x:-200
},{
    x:200,
    duration:3,
    repeat:-1,
    rotation:360,
    yoyo:true

})