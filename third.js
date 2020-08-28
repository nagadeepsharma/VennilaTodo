
var arr=['Home','About','Projects','Skills','Contact'];


function generateNav(){
    const ul=document.getElementById("ul");
    arr.forEach((e)=>{
        const li=document.createElement('li');
        const name=document.createTextNode(e)
        li.appendChild(name)
        
        ul.appendChild(li)
    });
}
generateNav();