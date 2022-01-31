// События ->
// Генерирует объект, со сведениями о произошедшем событии -> e & event -> "object"
// Функция ->
// Вызов функции с event в качестве параметра

// Объект события -> e, event
// Функция -> обработчик, handler, слушатель, listener, подписчик, subscriber
function handler1() {
    alert('Yo!!!')
}
function handler2(str) {
    alert(str)
}
const handler3 = () => {
    alert('Who!!!')
}

const ssd = () => {
    handler2('Hey!!!')
}

function handler4(e) {
    e.stopPropagation(); // чтоб не начали работать родительские события
    if (e.target.tagName === 'BUTTON') {
        console.dir(e.target.name)
    }
    // console.dir(e.currentTarget)
    // console.dir(e.target.id)
    // console.dir(e.currentTarget.id) // гарантированно заставит обработчик взаимодействовать с тем элементом который подписан на обработку события
}

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
// sm.onclick = handler1 // onClick
// sm.onclick = null

// sm.addEventListener('click', handler1)
// sm.addEventListener('click', () => {handler2('Hey!!')})
// sm.addEventListener('click', () => handler2('Hey!!'))
// sm.addEventListener('click', () => alert('Booom!!!')) // функция внутри не удалится через removeEventListener
// sm.removeEventListener('click', handler1)
// sm.removeEventListener('click', () => alert('Booom!!!')) // только так можно удалить
sm.addEventListener('click', handler4)
document.write(`&#x20bd`)
