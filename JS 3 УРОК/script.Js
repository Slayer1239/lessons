// let a = 'Привет'
// let b = a.slice(1)
// let c = a.slice(1,5)
// console.log(a,b,c)
let a = 'Однажды я гулял по лесу и встретил волка'
let b = a.search('по лесу')
let c = a.slice(b)
console.log(c)
let newText = a.replace('по лесу', 'по поляне')
console.log(newText)

let rain = confirm("Идет дождь?")
if (rain == true){
   alert("взять зонт")
}
else{
     alert("сиди дома")
}