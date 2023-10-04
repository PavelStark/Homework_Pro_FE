//Getting data from server:
const url = "https://dummyjson.com/products";

fetch(url)
  .then((res) => res.json())
  .then((data) => render(data.products));

//--------------------------------------------------------------------------------------------------
/* .then((data) => console.log(data)) */

/*  .then((data) => { let filteredData = data.products.filter(elem => elem.id % 2 === 0)
        console.log(filteredData) }) */

/* .then((data) => {console.log(data.products[0].title)}) */

//--------------------------------------------------------------------------------------------------

const div_root = document.querySelector("#root");
const card_container = document.createElement("div");

//creating main funciton render
function render(array) {
  for (let elem of array) {
    //declaration:
    const card = document.createElement("div");
    const image = document.createElement("img");
    const title = document.createElement("h2");
    const price = document.createElement("p");
    const star1 = document.createElement("span");
    const star2 = document.createElement("span");
    const star3 = document.createElement("span");
    const star4 = document.createElement("span");
    const star5 = document.createElement("span");
    const stars_container = document.createElement("div");

    //adding dlassnames:
    card_container.className = "card_container";
    card.className = "div_card";
    image.className = "image";
    title.className = "h2_title";
    price.className = "p_price";

    stars_container.className = "stars_container";
    star1.className = "fa fa-star";
    star2.className = "fa fa-star";
    star3.className = "fa fa-star";
    star4.className = "fa fa-star";
    star5.className = "fa fa-star";

    //appending elems:
    div_root.append(card_container);
    card_container.append(card);
    card.append(image, title, price, stars_container);
    stars_container.append(star1, star2, star3, star4, star5);

    //appearence on page:
    image.src = elem.images[0];
    title.innerText = "Tilte: " + elem.title;
    price.innerText = "Price: " + elem.price + "$";

    rating()

    //------------------------------------------------------------------------------------------------------

    //creating function rating:
    function rating() {
        
      if (Math.round(elem.rating) >= 1) {
        star1.className = "fa fa-star active"
      }
      if (Math.round(elem.rating) >= 2) {
        star2.className = "fa fa-star active"
      }
      if (Math.round(elem.rating) >= 3) {
        star3.className = "fa fa-star active"
      }
      if (Math.round(elem.rating) >= 4) {
        star4.className = "fa fa-star active"
      }
      if (Math.round(elem.rating) >= 5) {
        star5.className = "fa fa-star active"
      }
  }
  }
  
  console.log(array);
}

//------------------------------------------Thank you--------------------------------------------------------