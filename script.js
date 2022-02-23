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


function mudarCorPixelBoard (){
   const elementCorAMudar = document.querySelector(".selected");
   const mudarCor = getComputedStyle(elementCorAMudar, null);

      let getMudarCor = mudarCor.getPropertyValue("color");

   console.log(getMudarCor);



  /*  elementCorAMudar.

   getPropertyValue */


}







    




    
        
  
    
















