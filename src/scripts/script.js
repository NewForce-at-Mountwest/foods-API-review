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

    fetch("http://localhost:8088/food")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    debugger
                    if (productInfo.product.ingredients_text) {
                      food.ingredients = productInfo.product.ingredients_text
                    } else {
                      food.ingredients = "no ingredients listed"
                    }

                    // Build HTML string for individual food
                    const  htmlString = `<div class="flex">
                    <h3>${food.name}</h3>
                    <p>${food.category}</p>
                    <p>${food.ethnicity}</p>
                    <p>${food.ingredients}</p>
                    </div>
                    `
                    // Add HTML string to DOM

                        document.querySelector("#container").innerHTML += htmlString

                })
        })
    })