console.log("hello javascript");

let space=document.querySelector("#space-slider");
let abc=document.querySelector(".image-box");

space.addEventListener("input", function(){
   let bor=space.value;
   abc.style.borderWidth=`${bor}px`;
   console.log(bor);
});