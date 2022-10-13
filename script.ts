let changeC = document.getElementById("changeC");
if(changeC != null){
    changeC.addEventListener("mouseover", changeColor);
}

function changeColor(){
    if(changeC != null)
        if(changeC.style.color == "purple")
            changeC.style.color = "white" ;
        else    
            changeC.style.color = "purple" ;
}