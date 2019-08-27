
// Get foods from JSON Server
apiManager.getAllFoods().then(myParsedFoods => {
  // Loop through the foods from JSON Server
  myParsedFoods.forEach(food => {
    // Now fetch the food from the Food API
    apiManager.getIngredientsForSingleFood(food).then(productInfo => {
      // Print each food to the DOM
      domPrinter.printSingleFood(food, productInfo);
    });
  });
});
