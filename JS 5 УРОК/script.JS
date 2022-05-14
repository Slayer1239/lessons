
 function summ3(a, b , c){
     return a + b +c 
 }
 console.log(summ3(3,1,5))
 function infinitySumm(){
     let summ = 0
     for(let i = 0;i < arguments.length; i++){
         summ += arguments[i]
     }
     return summ
}
infinitySumm(3123123,13213,442433,432432,555)
let a = infinitySumm(3123123,13213,442433,432432,555)
console.log(a)
let car = function(carName){
console.log('Твоя машина ' + carName)
}
car('BMW')