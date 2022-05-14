let text = document.querySelector('#text')
let box = document.querySelectorAll('.box')
let pbox = document.querySelectorAll('p.box')
let colors = ['purple', ' pink' , 'yellow', 'blue', 'grey', 'red', 'green']
console.log(box)
text.style.color = 'blue'
text.style.fontSize = '30px'
text.style.backgroundColor = 'green'





for(let i = 0;  i< box.length; i++) {
    let randomColor = Math.floor(Math .random()*colors.length)
    box[i].style.width = '100px'
    box[i].style.height = '100px'
    box[i].style.backgroundColor = colors[randomColor]
    box[i].style.margin = '10px'
    
    let newDiv = document.createElement('div')
    newDiv.className = 'new'
    newDiv.style.height  = '100px'
    newDiv.style.backgroundColor = 'pink'
    document.body.insertBefore(newDiv, box[i])
}
for(let i = 0; i< pbox.length;i++){
    pbox[i].style.width = '70px'
    pbox[i].style.height = '70px'
}
