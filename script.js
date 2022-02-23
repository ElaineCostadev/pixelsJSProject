/*  window.onload = function(){ */
    let selectBlack = document.querySelectorAll(".color");
    let newSelected = document.createElement("selected");
    selectBlack.appendChild(newSelected);
   
    

    newSelected.addEventListener("click", function(event){
    let classSelected = document.querySelector(".selected");
    classSelected.classList.remove("selected");
    event.target.classList.add("selected"); 
    
    if(classSelected !== null ){
        
       }
      
       
       console.log(newSelected);
});
  /*   newSelected.className = "selected";
    
     */

/*     localStorage.setItem("colorBlack", newSelected );
 */


    
        
  
    
















