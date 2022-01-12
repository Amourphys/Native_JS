// object, array, function

const hey = {} // в переменной лежит ссылка на ячейку памяти

const hey1 = {}
const hey2 = {}
console.log(hey1 === hey2) // false

const friends = ['Ann', 'Alex', 'Rambo']

const user = {
    name: 'Bob',
    age: 30,
    friends: friends
}

const copyUser = {...user}

copyUser.name = 'Alex'

console.log(user === copyUser) // false

//1. Делаем копию
//2. Вносим изменения в копию
//3. Работаем дальше с копией

const deepCopyUser = {...copyUser, friends:[...copyUser.friends]}
console.log(Object.keys(deepCopyUser))

// map
const greetengs = friends.map(f => `Hi! My name is ${f}`)
console.log(greetengs)

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]
console.log(students.map(s => s.name))
console.log(students.map(s => `Hi! My name is ${s.name}`))

const getGreeteng = s => `Hi! My name is ${s.name}`
console.log(students.map(getGreeteng))

const copyStudents = students.map(s => s)//shallow copy
const deepCopyStudents = students.map(s => ({...s}))//deep copy 
const deepCopyStudents = students.map(s => {return {...s}})//deep copy
console.log(students.map(s => {
    if(s.name === 'Michael') {
        return {...s, scores: s.scores + 10}
    } else {
        return s
    }
}))

console.log(students.map(s => s.name === 'Michael') ? {...s, scores: s.scores + 10} : s)