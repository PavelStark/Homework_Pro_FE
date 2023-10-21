/* Напишите класс NumberArray, который будет содержать сво - во array. 
   В качестве значения св - ва необходимо сформировать массив с числовыми типами.
   К этому классу напишите список методов: 

   getLastElem(). Метод должен всегда возвращать последний элемент массива
   getAbs(). Метод должен возвращать абсолютное значение разницы первого и последнего элемента 
   getSum(). Метод должен возвращать сумму всех элементов сво-ва array

   setArray(n).Метод должен переопределить сво - во array на новый массив, где
   каждый элемент будет умножен на аргумент n.

   createObject().Метод должен вернуть объект c количеством сво - йств равному 
   количеству элементов массива сво - ва array.В качестве ключа сформируйте значение elem{ n } 
   
Пример:
Пример сво-ва
array: [10,20,30,40]

Пример результата
{
elem1: 10,
elem2: 20,
elem3: 30,
elem4: 40
}

Обратите внимание на то, что к сво - вам объекта можно обращаться через
квадратные скобки, например, obj[‘name’](аналог obj.name) */

class NumberArray {
  constructor(array) {
    this.array = array;
  }
  getLastElem() {
    console.log(this.array[this.array.length - 1]);
  }
  getAbs() {
    console.log((this.array[0] - this.array[this.array.length - 1]) * -1);
  }
  getSum() {
    console.log(this.array.reduce((acc, sum) => sum + acc, 0));
  }
  setArray(n) {
    console.log((this.array = this.array.map((elem) => elem * n)));
  }
  createObject() {
    let obj = {};
    let n = 1;

    for (let i = 0; i < this.array.length; i++) {
      obj[`elem${n++}`] = this.array[i];
    }
    console.log(obj);
  }
}

let arr = [1, 2, 3, 4];
let array1 = new NumberArray(arr);
let array2 = new NumberArray(arr);

array1.getLastElem();
array1.getAbs();
array1.getSum();
array1.setArray(10);
array1.createObject();
array2.createObject();

