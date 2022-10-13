"use strict";
var word = document.getElementById("word");
if (word != null) {
    word.addEventListener("mouseover", fade);
}
function fade() {
    if (word != null)
        if (word.style.color == "purple")
            word.style.color = "white";
        else
            word.style.color = "purple";
}
//# sourceMappingURL=script.js.map