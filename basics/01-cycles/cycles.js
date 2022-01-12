//1. Выведите с помощью цикла столбец чисел от 1 до 100.
for (i = 0; i <= 100; i++) {
    console.log(i)
}

//2.  Выведите с помощью цикла столбец чисел от 100 до 1.
for (i = 100; i > 0; i--) {
    console.log(i)
}

//3. Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 0; i <= 100; i += 2) {
    console.log(i)
}

//4. Заполните массив 10-ю иксами с помощью цикла.
let arr = [];
for (var i = 0; i < 10; i++) {
	arr[i] = 'x';
}
console.log(arr);

//5. Заполните массив числами от 1 до 10 с помощью цикла.
let arr1 = []
for (let i = 1; i <= 10; i++) {
    arr1.push(i)
}
console.log(arr1)

//6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
let arr2 = []
for (let i = 0; i < 10; i++) {
    arr2.push(Math.random().toFixed(2))
}
console.log(arr2)

//7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
let arr3 = []
for (let i = 1; i <= 10; i++) {
    arr3.push(Math.round(Math.random() * 10) + 1)
}
console.log(arr3)

//8. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr4 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
for (let i = 1; i < arr4.length; i++) {
    if (arr4[i] > 0 && arr4[i] < 10) {
        console.log(arr4[i])
    }
}

//9. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] == 5) {
        alert('Yes')
        break
    }
}

//10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0
for (let i = 0; i < arr6.length; i++) {
    sum += arr6[i]
    console.log(sum)
}

//11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr7 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < arr7.length; i++) {
    sum1 += arr7[i] * arr7[i];
}
alert(sum1);

//12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
let arr8 = [1, 2, 3, 7, 6, 9]
let sum2 = 0
for (let i = 0; i < arr8.length; i++) {
    sum2 += arr8[i]
}
    let result = sum2 / arr8.length
    console.log(result)

//13. Выведите с помощью цикла столбец нечетных чисел от 1 до 100.
const myArray = [];

for (let i = 1; i <= 100; i += 2) {
  myArray.push(i);
}
console.log(myArray)

const qq = () => {
    const a = {
      i: 1,
      toString: function () {
        return a.i++;
      }
    };

    if (a == 5 && a == 6 && a == 7) {
      console.log('It works')
    }
} 

console.log(qq())