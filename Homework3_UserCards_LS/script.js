// finding root:
const div_root = document.querySelector("#root");
// creating cards_container and appening it:
const cards_container = document.createElement("div");
div_root.append(cards_container);
// // setting className:
cards_container.className = "cards_container";

// our object:
let names = [
  {
    id: 1,
    name: "Steven",
    image: "https://i.ibb.co/tXqmKKR/1.png",
    salary: "5000",
    gender: "M",
  },
  {
    id: 2,
    name: "Neena",
    image: "https://i.ibb.co/yYxK3cq/2.png",
    salary: "10000",
    gender: "F",
  },
  {
    id: 3,
    name: "John",
    image: "https://i.ibb.co/SNqFDbB/3.png",
    salary: "4500",
    gender: "M",
  },
  {
    id: 4,
    name: "Rogers",
    image: "https://i.ibb.co/WnG0fVZ/4.png",
    salary: "3400",
    gender: "M",
  },
  {
    id: 5,
    name: "Cevin",
    image: "https://i.ibb.co/vdQK54J/6.png",
    salary: "500",
    gender: "M",
  },
  {
    id: 6,
    name: "Alshey",
    image: "https://i.ibb.co/wSJN6db/5.png",
    salary: "1210",
    gender: "F",
  },
  {
    id: 7,
    name: "Milki",
    image: "https://i.ibb.co/JpnDnH5/7.png",
    salary: "1210",
    gender: "F",
  },
  {
    id: 8,
    name: "Polar",
    image: "https://i.ibb.co/SnNLhgg/9.png",
    salary: "1210",
    gender: "M",
  },
  {
    id: 9,
    name: "Grindell",
    image: "https://i.ibb.co/fGH3RPW/8.png",
    salary: "1210",
    gender: "M",
  },
];

// our picture Array:
const maleImg = [
  "https://i.ibb.co/tXqmKKR/1.png",
  "https://i.ibb.co/SNqFDbB/3.png",
  "https://i.ibb.co/WnG0fVZ/4.png",
  "https://i.ibb.co/fGH3RPW/8.png",
  "https://i.ibb.co/SnNLhgg/9.png",
  "https://i.ibb.co/vdQK54J/6.png",
];

const femaleImg = [
  "https://i.ibb.co/yYxK3cq/2.png",
  "https://i.ibb.co/JpnDnH5/7.png",
  "https://i.ibb.co/wSJN6db/5.png",
];

// getting data for LS:
let newNames = JSON.parse(localStorage.getItem("key")) ?? names;

// creating function renderCards:
const renderCards = (array) => {
  for (let elem of array) {
    // creating elements(cards_container):
    const div_card = document.createElement("div");
    const user_image = document.createElement("img");
    const text_container = document.createElement("div");
    const user_id = document.createElement("p");
    const user_name = document.createElement("p");
    const user_salary = document.createElement("p");
    const gender = document.createElement("p");

    // getting elems from object:
    user_id.innerText = "User Nr. : " + elem.id;
    user_name.innerText = "Name : " + elem.name;
    user_image.src = elem.image;
    user_salary.innerText = "Salary : " + elem.salary;
    gender.innerText = "Gender : " + elem.gender;

    // setting classNames:
    text_container.className = "text_container";
    user_image.className = "image";
    div_card.className = "div_card";

    // appending elems:
    cards_container.append(div_card);
    div_card.append(user_image, text_container);
    text_container.append(user_name, user_salary, user_id, gender);

    // setting id by dblclick on card:
    div_card.ondblclick = () => {
      deleteUserById(elem.id);
    };
  }
};

//-------------------------------------------------------------------------------------------
// Form:

// creating elems(form):
const form = document.createElement("form");
const name_input = document.createElement("input");
const salary_input = document.createElement("input");
const submitBtn = document.createElement("button");
const changeThemeBtn = document.createElement("button");
const gender_input = document.createElement("select");
const male_option = document.createElement("option");
const female_option = document.createElement("option");
const void_option = document.createElement("option");

// setting classes and styles:
form.classList.add("form");
name_input.classList.add("name_input");
name_input.placeholder = "Name";
name_input.type = "text";
salary_input.classList.add("salary_input");
salary_input.placeholder = "Salary";
salary_input.type = "number";
submitBtn.classList.add("submitBtn");
submitBtn.innerText = "Add Card";
changeThemeBtn.innerText = "Change Theme";

void_option.textContent = "Gender";
void_option.style.display = "none";

male_option.value = "M";
male_option.textContent = "M";
female_option.value = "F";
female_option.textContent = "F";

// appending elems:
div_root.prepend(form);
gender_input.append(void_option, male_option, female_option);
form.append(name_input, salary_input, gender_input, submitBtn, changeThemeBtn);

//------------------------------------------------------------------------------------------

//creating a function (to add new object to our old object :
function addUser(obj) {
  newNames.push(obj);
  rerender(newNames);
}

//------------------------------------------------------------------------------------------

// creating onclick function for our addUser button
submitBtn.onclick = (event) => {
  event.preventDefault();

  // alerts in case of empty inputs:
  if (name_input.value === "") {
    return alert("Please type in name");
  } else if (salary_input.value === "") {
    return alert("Please type in salary");
  }

  // setting conditions to get a new random image:
  let myImage = "";

  if (gender_input.value === "M") {
    myImage = maleImg[[Math.floor(Math.random() * maleImg.length)]];
  } else if (gender_input.value === "F") {
    myImage = femaleImg[[Math.floor(Math.random() * femaleImg.length)]];
  } else return alert("Please choose gender");

  //-------------------------------------------------------------------------------------------

  //inserting data from inputs to our object

  const { name, salary, image, gender } = event.target;
  let names = {
    name: name_input.value,
    salary: salary_input.value,
    id:
      newNames.length !== 0
        ? Math.max(...newNames.map((elem) => elem.id)) + 1
        : 1,
    image: myImage,
    gender: gender_input.value,
  };
  
  addUser(names);
};
//---------------------------------------------------------------------------

//creating function deleteUserbyId:
function deleteUserById(id) {
  newNames = newNames.filter((elem) => elem.id !== id);
  rerender(newNames);
}

//creating function rerender:
function rerender(array) {
  localStorage.setItem("key", JSON.stringify(array));
  cards_container.innerHTML = "";
  renderCards(array);
}

//calling renderCards:
renderCards(newNames);

//-------------------------------------------------------------------------------------------------------------

//conditions and LS for Theme:
const body = document.body;
body.className = localStorage.getItem("theme") ?? "light";

changeThemeBtn.onclick = () => {
  if (body.className === "dark") {
    body.className = "white";
    localStorage.setItem("theme", "light");
  } else {
    body.className = "dark";
    localStorage.setItem("theme", "dark");
  }
};

//----------------------------------------Thank you for reading------------------------------------------------
