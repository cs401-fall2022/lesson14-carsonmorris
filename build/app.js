/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
;
/**
 * turns demo red
 */
function turnBlue() {
    if (document != null) {
        var c = document.getElementById("title").style.color;
        if (c === 'blue') {
            document.getElementById("title").style.color = "black";
        }
        else {
            document.getElementById("title").style.color = "blue";
        }
    }
}
export { hello, turnBlue };
//# sourceMappingURL=app.js.map