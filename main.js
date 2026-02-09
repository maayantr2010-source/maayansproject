let p = document.querySelector('#py')
let h = document.querySelector("main h2")
let text = p.textContent;
function myfunc(){
    if (p.style.display === "none"){
    p.style.display = "block";
    }
    else{
        p.style.display = "none";
    }

}
function changecontent(){
    h.textContent="nigger";
}

function detect(){
    p.style.textDecoration = "underline";
    p.textContent="new text";
}

function two(){
    p.style.textDecoration = "none";
    p.textContent = text;
    
}
 function changeColor(color) {
             p.style.color = color;
          }