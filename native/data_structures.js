const todoListID_1 = "01rte"
const todoListID_2 = "02rte"

const todolists = [
    {
        id: todoListID_1,
        title: "What to learn",
        filter: 'ALL'
    }, {
        id: todoListID_2,
        title: "What to buy",
        filter: 'ALL'
    }
]

const tasks = {
    [todoListID_1]: [
        { // "1"
            id: "01h",
            title: "HTML",
            isDone: true
        }, {
            id: "02h",
            title: "CSS",
            isDone: true
        }, {
            id: "03h",
            title: "JS",
            isDone: true
        },
    ],
    [todoListID_2]: [
        { // "2"
            id: "01h",
            title: "Meat",
            isDone: true
        }, {
            id: "02h",
            title: "Milk",
            isDone: true
        }, {
            id: "03h",
            title: "Bread",
            isDone: true
        },
    ]
}
const user = "bob"
const bob = {
    [user + "Name"]: "Bob", // "bobName"
    [todoListID_1]: "Serg", // для того чтобы использовать содержимое пременной с таким именем
    "age": 23
}
console.log(todolists[0])
console.log(todolists.map(t => ({...t,description: ""})))
console.log(todolists.filter(t => t.id !== todoListID_1))
console.log(tasks[todoListID_1])
const newTasks = tasks[todoListID_1].map(t => ({...t, isDone: false}))
console.log(newTasks.map(t => {
    if (t.title === "HTML") {
        return {...t, isDone: true}
    }
    return t
}))
console.log(newTasks.map(t => t.title === "HTML" ? {...t, isDone: true} : t))

//reduce => 
//сложение всех элементов массива
const nums = [1,2,3,4,5,6,7]
console.log(nums.reduce((acc, el) => acc + el , 0))//результат ретурна функции передается в качестве аккумулятора для следующей итерации
//находим максимальное число
console.log(nums.reduce((max, el) => max > el ? max : el))
console.log(nums.reduce((max, el, i, arr) => {

}))
//работа с объектами
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
console.log(students.reduce((sum, el) => sum + el.scores), 0)//получаем сумму результатов студентов

console.log(students.reduce((names, el) => (`${names} ${el.name}`), ''), '')//получаем имена студентов из массива

console.log(students.reduce((newArr, el) => {//отбор студентов
    newArr.push({...el, isStudent: true})
    return newArr
    return newArr.concat({el, isStudent: true})
}, []))

console.log(students.reduse((newArr, el) => {//отбор неженатых студентов
    if(!el.isMarried) {
       newArr.push(el)
       return newArr 
    }
    return newArr
}, []))

console.log(students.reduse((newObj, el) => {
    newObj[el.name] = el.age
    return newObj
}, {}))//{"Bob": 123}