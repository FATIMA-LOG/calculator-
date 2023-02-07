
let buttons = document.querySelectorAll('.buttons')
let result =document.querySelector('.span')








for(let i = 0; i < buttons.length; i++){

    
    buttons[i].addEventListener('click', (e)=>{
   
    let atr = e.target.getAttribute('value')
    result.innerHTML += atr
    

})
}
  
function deleteResult(){
    
    result.innerText  = result.innerText.slice(0 , -1)
}

function  operation(){
 result.innerText = eval(result.innerText)

}
    

 function deleteAllResults(){

result.innerHTML = ''

 }
