// export const selectRestaurants = (reduxstate) => reduxstate.restaurants.all;
export const selectRestaurants = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.all];
  return clonedArray.sort((a, b) => a.name.localeCompare(b.name));
};
