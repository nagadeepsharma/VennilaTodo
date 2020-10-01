var count=1
function addItem(){
    
    var list=document.querySelector('.li');
    var todo=document.querySelector('input').value;
    if (todo.length===0){
        alert("Enter Any Todo")
    }
    
    else{
        if(count===12){
            alert("So Many Todos!Complete Any todo Before Adding")
        }
        else{
            var img=document.querySelector('img')
            img.style.display='none'
            var li=document.createElement('li')
            var item=document.createTextNode(todo)
            var sp=document.createElement('i')
            sp.setAttribute('class','fa fa-trash')
            li.setAttribute('id',count)
            sp.setAttribute('id',count)
            li.appendChild(sp)
            li.appendChild(item)
            list.appendChild(li)
            count=count+1
            todo=document.querySelector('input').value=" "
        }
        
        

    }
    
    


    sp.addEventListener('click',()=>{
            var alis=document.getElementById(sp.id)
            alis.remove()
            count=count-1   
        
    })

}
window.addEventListener('load',()=>{
    alert("When Page Loads Your Todos Will Be Gone!")
})



