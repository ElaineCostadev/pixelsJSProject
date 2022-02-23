/* window.onload = function(){ */

   let colorPalette = document.querySelector("#color-palette");
   colorPalette.addEventListener("click", selectedClass);


 /*   let classColor = document.querySelectorAll(".color");
   let criateSelected = document.createElement("selected");
   criateSelected.value = classColor.value; */

   /* classColor.appendChild(criateSelected); */
   
 
function selectedClass (event){
   let classSelected = document.getElementsByClassName("selected")[0];
      classSelected.classList.remove("selected");
      event.target.classList.add("selected"); 
   };

//mentorias e https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

function mudarCorPixelBoard (){
   
   const selecionarPixel = document.querySelectorAll(".pixel");
   for(let index = 0; index < selecionarPixel.length; index +=1){
      selecionarPixel[index].addEventListener("click", function(event){
         const elementCorAMudar = document.querySelector(".selected");
         let colorSelectedPixel = getComputedStyle(elementCorAMudar).backgroundColor;
         event.target.style.backgroundColor = colorSelectedPixel;
      })
      
   }
}
mudarCorPixelBoard();



 







    




    
        
  
    
















