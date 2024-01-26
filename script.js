const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


let fix = document.querySelector(".fixedImage");
 let con = document.querySelector(".container");

 con.addEventListener("mouseenter",()=>{
   return fix.style.display = "block";
 })
 con.addEventListener("mouseleave", () => {
   return (fix.style.display = "none");
 });

 let h = document.querySelector(".h1")
 h.forEach((e)=>{return e.addEventListener("mouseenter", () => {
  let image = e.getAttribute("data-image");
console.log(image);
  fix.style.backgraoundImage( `url(${image})`);
 });
 });