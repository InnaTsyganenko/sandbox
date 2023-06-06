AOS.init();

const data = [
      {
            title: "Basil",
            classes: ["food", "veg", "herb"],
            price: 8
      },
      {
            title: "Lavender",
            classes: ["food", "veg", "floral", "herb"],
            price: 8
      },
      {
            title: "Strawberry",
            classes: ["food", "fruit"],
            price: 8
      },
      {
            title: "Pasta",
            classes: ["food", "grain"],
            price: 8
      },
      {
            title: "Oregeno",
            classes: ["food", "herb"],
            price: 8
      },
      {
            title: "Microgreens",
            classes: ["food", "herb"],
            price: 8
      },
      {
            title: "Water",
            classes: ["drink"],
            price: 8
      },
      {
            title: "Grape Wine",
            classes: ["drink", "fruit", "alcohol"],
            price: 8
      },
      {
            title: "Smoothie",
            classes: ["drink", "fruit", "juice"],
            price: 8
      },
      {
            title: "Sunny-D",
            classes: ["drink", "fruit", "juice"],
            price: 8
      },
      {
            title: "Pespi",
            classes: ["drink", "soda"],
            price: 8
      },
      {
            title: "Twizzlers",
            classes: ["fruit", "candy"],
            price: 8
      },
      {
            title: "Sour Patch Kids",
            classes: [, "candy", "sour"],
            price: 8
      }
];

const checkboxes = document.querySelectorAll("input[type='checkbox']"),
      cardContainer = document.getElementById("wrapper");

var checkboxValues = [];

populateCards();

checkboxes.forEach((box) => {
      //ensures that all checkboxes are unchecked when the window reloads
      box.checked = false;
      box.addEventListener("change", () => filterCards());
});

function populateCards() {
      var time = 100;

      data.forEach((obj) => {
            let red = Math.floor(Math.random() * (180 - 100) + 100);
            let green = Math.floor(Math.random() * (180 - 100) + 100);
            let blue = Math.floor(Math.random() * (180 - 100) + 100);

            let randomColor = `rgb(${red},${green},${blue} )`;

            var card = `
            <div data-aos="fade-up" data-aos-duration=${time} data-aos-delay=300 class="card" style="   background-color:${randomColor}; margin:10px;">
            <h1 class="title">${obj.title}</h1>
            </div>
        `;
            time += 50;
            wrapper.innerHTML += card;
      });
}

function grabCheckboxValues() {
      var checkboxValues = [];
      checkboxes.forEach((checkbox) => {
            if (checkbox.checked) checkboxValues.push(checkbox.value);
      });
      return checkboxValues;
}



function filterCards() {
      wrapper.innerHTML = "";  // очищаем контейнер, будем всавлять новые без дубляжа
      
      checkboxValues = grabCheckboxValues(); // записываем выбранные значения checkbox в переменную
      console.log(checkboxValues);
      data.forEach((item) => {
            let classes = item.classes; // находим все классы из data
            
            let result = (arr, target) => target.every((v) => arr.includes(v));
            console.log(result);
            let isMatch = result(classes, checkboxValues);
            if (isMatch) {
                  let red = Math.floor(Math.random() * 200);
                  let green = Math.floor(Math.random() * 200);
                  let blue = Math.floor(Math.random() * 200);

                  let randomColor = `rgb(${red},${green},${blue} )`;

                  var card = `
            <div data-aos="zoom-in" data-aos-duration=400 class="card" style="background-color:${randomColor}; margin:4px;" data-aos-offset="500">
            <h1 class="title">${item.title}</h1>
            </div>
        `;
                  wrapper.innerHTML += card;
            }
      });
}
