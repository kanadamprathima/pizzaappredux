export const selectRestaurantsWithPizzas = (reduxState) => {
  const restaurants = reduxState.restaurants.all;
  const pizzas = reduxState.pizzas.allPizzas;
  // go through each restaurant
  const restWithPizza = restaurants.map((rest) => {
    const replacePizzas = rest.pizzas.map((pid) =>
      pizzas.find((full) => pid === full.id)
    );
    console.log("object pizzas", replacePizzas);
    // return { ...rest, pizzas: replacePizzas };
    return { ...rest, pizzas: replacePizzas };
  });
  return restWithPizza;
};
