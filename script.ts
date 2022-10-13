let changeC = document.getElementById("changeC");
if(changeC != null){
    changeC.addEventListener("mouseover", changeColor);
}

function changeColor(){
    if(changeC != null)
        if(changeC.style.color == "red")
            changeC.style.color = "white" ;
        else if(changeC.style.color == "white")
            changeC.style.color = "blue" ;
        else    
            changeC.style.color = "red" ;
}