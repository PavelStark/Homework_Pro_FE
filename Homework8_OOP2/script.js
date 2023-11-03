/* 1. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, 
добавьте геттер validPhone, которое проверяет значение свойства phone на вхождение
знака + в начале строки. Если знак отсутствует, геттер validPhone должно принять
булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery
и в качестве аргументов конструктора укажите значения переменных name и phone. 

Пример значений переменных: 
let name = "Pizza" 
let phone = "81234567890" 

Пример результата: false */

class Delivery {
  get validPhone() {
    if (this.phone[0] === "+") return true;
    else {
      return false;
    }
  }

  constructor(name, phone) {
    (this.name = name), (this.phone = phone);
  }
}

let User1 = new Delivery("Pavel", "+375257778809");
let User2 = new Delivery("Maria", "912371982813");

console.log(User1);
console.log(User2);
console.log(User1.validPhone);
console.log(User2.validPhone);

// ----------------------------------------------------------------------------------------------------------

/* 2. В программе создан класс Permissions, свойства которого описывают права пользователей
на редактирование статей на сайте. Создайте новый класс Users, который наследуется от класса
Permissions. Дополнительно в классе Users добавьте свойство name, значение которого класс
принимает в качестве аргумента конструктора.

Входные данные: */

class Permissions {
  constructor() {
    this.create = false;
    this.read = true;
    this.update = false;
    this.remove = false;
  }
}

class Users extends Permissions {
  constructor(name) {
    super(name);
    this.name = name;
  }
}

let User3 = new Users("Pavel");
console.log(User3);

// ----------------------------------------------------------------------------------------------------------

/* 3. Все печатные издания имеют название, год издания, состоят из определенного количества
страниц, а ещё могут портиться. 

Создайте класс PrintEditionItem со свойствами: name, releaseDate, pagesCount, state, type. 

Конструктор класса должен принимать название (name), дату выпуска (releaseDate) и количество
страниц (pagesCount) в качестве аргумента. Состояние (state) по умолчанию установите равным 100,
тип type пока должен быть равен null. 
Испорченное издание можно подклеить и этим улучшить его состояние. Создайте метод fix(),
увеличивающий state в полтора раза. Метод не должен принимать аргументов. 
Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное. Создайте
«сеттер» для свойства state, принимающий в качестве аргумента новое состояние печатного
издания (число). Если новое состояние меньше 0, «сеттер» должен записать в свойство state 
значение 0. Если новое состояние больше 100, должно быть записано значение 100. В остальных 
случаях в свойство state записывается переданное в «сеттер» значение. 
Создайте «геттер», который читает значение свойства state.Создайте класс Magazine, который
будет наследоваться от класса PrintEditionItem.Конструктор класса должен принимать такие же
параметры, как и класс - родитель.От базового печатного издания журнал отличается только
типом.Значение свойства type равно "magazine". 
Создайте класс Book, наследующийся от класса PrintEditionItem.Конструктор класса должен 
принимать такие же параметры, как и класс - родитель, а также имя автора книги author.Значение 
свойства type равно "book".
Создайте классы NovelBook для романов, FantasticBook для фантастических произведений и 
DetectiveBook для детективов, наследующиеся от класса Book.Значения свойства type равны "novel",
"fantastic" и "detective" соответственно. */

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return this.state * 1.5;
  }

  set setState(arg) {
    if (arg < 0) {
      this.state = 0;
    } else if (arg > 100) {
      this.state = 100;
    } else this.state = arg;
  }

  get getState() {
    this.state = state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = "detective";
  }
}

let Book1 = new PrintEditionItem("Pavel's Life", "1989", "2000");
console.log(Book1);
console.log(Book1.fix());

Book1.setState = 200;
console.log(Book1.state);

let magazine = new Magazine("Pavel's Life", "1989", "2000");
console.log(magazine);

let book = new Book("Pavel's Life", "1989", "2000", "Pavel");
console.log(book);

let novelBook = new NovelBook("Pavel's Life", "1989", "2000", "Pavel");
console.log(novelBook);

let fantasticBook = new FantasticBook("Pavel's Life", "1989", "2000", "Pavel");
console.log(fantasticBook);

let detectiveBook = new DetectiveBook("Pavel's Life", "1989", "2000", "Pavel");
console.log(detectiveBook);

// ----------------------------------------------------------------------------------------------------------

/* Также рекомендуется выполнить список задач из сервиса codewars
https://www.codewars.com/
Необходимо зарегистрироваться и выполнить список задач на функции:

https://codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
https://www.codewars.com/kata/58fa273ca6d84c158e000052/train/javascript
https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript  */

/* 1. Create a method to see whether the string is ALL CAPS. */

String.prototype.isUpperCase = function () {
  let str = this.split("");
  for (elem of str) {
    if (elem === elem.toLowerCase()) {
      return false;
    }
  }
  return true;
};

console.log("Pavel".isUpperCase());

/* 2. Determine the total number of digits in the integer(n >= 0) given as input to the function.
   For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits.Be careful to avoid overflows / underflows.
   All inputs will be valid. */

function digits(n) {
  return n.toString().length;
}

console.log(digits("128685"));

/* 3. Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd
   number of characters then it should replace the missing second character of the final pair with an underscore('_'). */

function solution(str) {
  let str2 = [];

  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      str2.push(str[i] + str[i + 1]);
    }
  }
  if (str === "") {
    return (str2 = []);
  }
  return str2.join().replace(undefined, "_").split(",");
}
console.log(solution("Letters"));

/* 4. Modify the kebabize function so that it converts a camel case string into a kebab case. */

function kebabize(str) {
  let smallLetters = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase() && isNaN(parseInt(str[i])) == true) {
      smallLetters.push(str[i]);
    } else if (str[i].toUpperCase() && isNaN(parseInt(str[i])) == true) {
      smallLetters.push("-");
      smallLetters.push(str[i]);
    }
  }

  if (smallLetters[0] === "-") {
    smallLetters.shift();
  }
  return smallLetters.join("").toLowerCase();
}

console.log(kebabize("myStringHas4Letters"));

/* 5. You probably know the "like" system from Facebook and other pages.People can "like" blog posts,
pictures or other items.We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples: 
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this" */

function likes(names) {
  let arr = "";
  if (names.length === 0) {
    arr = "no one likes this";
  } else if (names.length === 1) {
    arr = `${names} likes this`;
  } else if (names.length === 2) {
    arr = `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    arr = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    arr = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  return arr;
}
console.log(likes(["Alex", "Pavel", "Maria", "Sven", "Richard"]));

/* 6. The main idea is to count all the occurring characters in a string. If you have a string
 like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

function count(string) {
  return string.split("").reduce(function (acc, c) {
    return (acc[c] = (acc[c] || 0) + 1), acc;
  }, {});
}

console.log(count("tzree"));
