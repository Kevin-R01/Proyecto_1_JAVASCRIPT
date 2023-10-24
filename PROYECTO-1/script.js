const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton=>{
boton.addEventListener("click", () =>{
    const boton1 = boton.textContent;
    if(boton.id === "limpiar") {
        pantalla.textContent = "0";
        return;
    }

    if(boton.id === "borrar"){
       if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
        pantalla.textContent= "0";
       } else{
        pantalla.textContent = pantalla.textContent.slice(0, -1);
        }
        return;
    }

    if(boton.id === "igual"){
        try{
            const expresion = pantalla.textContent;
            if(expresion.includes("//")) {
                pantalla.textContent = "Error!";
            }else{ 
                pantalla.textContent=eval(expresion);
            }
         } catch (error){
            pantalla.textContent = "Error!";
         }
        return;
    }

    if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
        pantalla.textContent = boton1;
    } else {
        pantalla.textContent += boton1;
    }
    
    

    
    })
})