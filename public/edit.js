const input=document.querySelector('#input');
const button=document.querySelector('button');
let urlParams=new URLSearchParams(window.location.search)

let recieveData= urlParams.get('data')

input.value=recieveData

button.addEventListener('click',()=>{
    if(input.value!==""){
        sessionStorage.setItem(`${Math.floor(Math.random()*100000)}`,input.value)
        window.location.href='/'
    }
    else{
        alert('input cannot be empty')
    }
})