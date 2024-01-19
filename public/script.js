const button=document.querySelector('#submit');
const input=document.querySelector('#task');
const tasks=document.querySelector('#tasks');


printTasks()
button.addEventListener('click',()=>{
    if(input.value!==""){
        let li = document.createElement("li");
        li.innerHTML=`<b>${input.value}</b>    <i>Edit</i>   <i>Delete</i>`
        tasks.appendChild(li)
        sessionStorage.setItem(`${Math.floor(Math.random()*100000)}`,input.value)
        clearInput()
    }
})
tasks.addEventListener('click',(e)=>{
    if(e.target.tagName==='I'){
        if(e.target.innerHTML==='Delete')
            deleteTask(e)
        else{
            let dataToSend=e.target.parentNode.querySelector('b').innerText
            let url='edit?data='+encodeURIComponent(dataToSend)
            deleteTask(e)
            window.location.href=url
        }
    }
})

function clearInput() {
    input.value=""
}
function deleteTask(e) {
    for(let i=0;i,sessionStorage.length;i++){
        if(sessionStorage.getItem(sessionStorage.key(i))===e.target.parentNode.querySelector('b').innerText){
            sessionStorage.removeItem(sessionStorage.key(i))
            break
        }
    }
    e.target.parentNode.style.display='none'
}

function printTasks(){
    for (var i = 0; i < sessionStorage.length; i++) {
        let li = document.createElement("li");
        li.innerHTML=`<b>${sessionStorage.getItem(sessionStorage.key(i))}</b> <i>Edit</i>   <i>Delete</i>`
        tasks.appendChild(li)
    }
}
