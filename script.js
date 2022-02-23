/* window.onload = function(){ */

   let colorPalette = document.querySelector("#color-palette");
   const selecionarPixel = document.querySelectorAll(".pixel");
   let btnClear = document.querySelector("#clear-board");

   colorPalette.addEventListener("click", selectedClass);


 
function selectedClass (event){
   let classSelected = document.getElementsByClassName("selected")[0];
      classSelected.classList.remove("selected");
      event.target.classList.add("selected"); 
   };

//mentorias e https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle


function mudarCorPixelBoard (){
   
   for(let index = 0; index < selecionarPixel.length; index +=1){

      selecionarPixel[index].addEventListener("click", function(event){
         const elementCorAMudar = document.querySelector(".selected");
         let colorSelectedPixel = getComputedStyle(elementCorAMudar).backgroundColor;
         event.target.style.backgroundColor = colorSelectedPixel;
      })
      
   }
}
mudarCorPixelBoard();



//ajuda do Kaio Magalhaes
 function clearAllPixels (){

       btnClear.addEventListener("click", function(){ 

         for(let index = 0; index < selecionarPixel.length; index +=1){
            selecionarPixel[index].style.backgroundColor = "white";
         }
      });
   }
   clearAllPixels();
            

          
  

        
       /*    */
       
         /* let btnLimpar = document.querySelector("#clear-board"); */






 




  



    




    
        
  
    
















