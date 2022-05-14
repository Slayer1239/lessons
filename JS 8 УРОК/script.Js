let p = document.createElement('p')
let text1 = document.querySelector('#text1')
p.id = 'before'
p.append('Я добавлен с помощью метода append')
p.style.color = 'purple'
text1.before(p)
document.body.innerHTML += '<a href="https://google.com">Google</a>'
let text4 = document.querySelector('#text4')
text4.textContent='bebra'
text4.style.cssText ='color: blue;\
                    font-size: 50px;\
                    text-align: center;'