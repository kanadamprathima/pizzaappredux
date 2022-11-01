export const selectPizzas = (reduxstate) => reduxstate.pizzas.allPizzas;
export const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.allPizzas.length;
};
export const selectMostBoughtPizza = (reduxState) => {
  if (reduxState.pizzas.allPizzas.length === 0) {
    return null;
  }
  return reduxState.pizzas.allPizzas.reduce((mostBought, nextPizza) => {
    return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
  });
};
export const selectPizzaById = (id) => (reduxState) => {
  return reduxState.pizzas.allPizzas.find((p) => p.id === id);
};
