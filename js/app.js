const startC= ()=>{
    let divClick= document.querySelectorAll(".js-btn");
    divClick.forEach(element => {
        element.addEventListener("click", function(){
            let divModel= this.nextElementSibling
            console.log(divModel)
            divModel.classList.toggle("fadeIn")
            
        })
    });
}

startC()