let input = document.querySelector('#input_task')
let add_task = document.querySelector('#add_task')
let clear_tasks = document.querySelector('#remove_tasks')
let all_tasks = document.querySelector('#all_tasks')

clear_tasks.addEventListener('click', ()=>{
    all_tasks.innerHTML = ''
})

function addTask(){
    if(input.value == ''){
        alert('Введите задачу!')
        return
    }
    let task = document.createElement('h2')
    task.textContent = '- ' + input.value
    task.addEventListener('click', ()=>{
        if(task.style.textDecoration != 'line-through'){
            task.style.textDecoration = 'line-through'
        }
        else{
            task.style.textDecoration = 'none'
        }
    })
    all_tasks.appendChild(task)
    input.value =''
}
add_task.addEventListener('click', ()=>{
        addTask()                           
})
input.addEventListener('keydown',event=>{
       if(event.key =='Enter'){
          addTask()                       
       }                                                              
})