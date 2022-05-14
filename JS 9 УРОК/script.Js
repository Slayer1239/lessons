let btn1 = document.querySelector('#btn1')
btn1.counter = 0 
// btn1.onclick = function(){
//     this.counter++
//     console.log('число кликов' + this.counter)
//     changeBG(this)
// }
function changeBG(object){
    if(object.counter % 2 ==0){
        object.style.background = 'linear-gradient(to left, rgb(218, 0, 0),rgb(255, 0, 255),rgb(255, 255, 0))'
    }
    else{
        object.style.background = 'linear-gradient(to right, rgb(218, 0, 0),rgb(255, 0, 255),rgb(255, 255, 0))'
    }
    
    
}



btn1.addEventListener('mouseover',mouseOver)

function mouseOver(){
    changeBG(this)
    this.counter++
}