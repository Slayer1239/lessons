// let inputname = prompt('Введите ваше имя')
// let birthday = +prompt ('Введите ваш год рождения')
// function info(myName, bd){
//     let age = 2022 - bd
//     alert(`Ваше имя: ${myName}. Вам сейчас: ${age} лет.`)
// }
// info(inputname, birthday)
// let random = Math.floor ((Math.random() * 11)+5)
// console.log(random)
let car = {
    color:'pink',
}
car.brend = 'Mersedes-Benz'
car.speed = 800
car.isDriving = false
car.drive = function(){
    this.isDriving = true
    return 'Машина поехала'
}
car.stop = function(){
    this.isDriving = false
    return 'Машина остановилась'
}
console.log(car)