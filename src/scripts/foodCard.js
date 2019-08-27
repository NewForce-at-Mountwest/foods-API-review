// Module that contains a function to build and return an HTML string based on a single food object

const htmlBuilder = {
  buildFoodCard: (singleFoodObject) => {
    return `<div class="flex">
    <h3>${singleFoodObject.name}</h3>
    <p>${singleFoodObject.category}</p>
    <p>${singleFoodObject.ethnicity}</p>
    <p>${singleFoodObject.ingredients}</p>
    </div>
    `;
  }
};

// const Tommy = {
//   name: "Tommy",
//   speak: function() {
//     "Hi, i'm tommy";
//   }
// };

Tommy.speak();
