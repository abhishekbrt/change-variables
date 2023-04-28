console.log("hello javascript");

let space=document.querySelector("#space-slider");
let imageBox=document.querySelector(".image-box");
let picture=document.querySelector(".image");
let blurSlider=document.querySelector("#blur-slider");
let colorInput=document.querySelector("#base");
let jsColor=document.querySelector("span");
jsColor.style.color= "#ffff00";

space.addEventListener("input", function(){
   let bor=space.value;
   imageBox
.style.borderWidth=`${bor}px`;
   // console.log(bor);
});

 blurSlider.addEventListener("input",function(){
   let value=blurSlider.value;
   // console.log(value/10);
   picture.style.filter=`blur(${value/10}px)`;
 })

 colorInput.addEventListener("input",function(event){
   const selectedColor=event.target.value;
   // console.log(selectedColor);
   imageBox.style.borderColor=selectedColor;
   jsColor.style.color=selectedColor;
 })