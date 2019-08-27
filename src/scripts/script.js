// Once you have retrieved all of the foods from your own Food API, display each one of them in the DOM. Create an HTML representation of each food which will display the name of the food, its type, and its ethnicity.

// Create a DOM element in your index.html with a class of foodList.
// Use the template code below to take the data and print it to the DOM.
// Example fetch call using functions

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {

//         parsedFoods.forEach(food => {
//            //Print foods to DOM
//            document.querySelector("#container").innerHTML += `<div class="flex">
//            <h3>${food.name}</h3>
//            <p>${food.category}</p>
//            <p>${food.ethnicity}</p>
//            <p>${}</p>

//            </div>
//            `
//         })
//     })

   apiManager.getAllFoods()
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            // Now fetch the food from the Food API
            apiManager.getIngredientsForSingleFood(food)
                .then(productInfo => {
                   domPrinter.printSingleFood(food, productInfo)
                })
        })
    })