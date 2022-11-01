export const selectUser = (reduxstate) => {
  return reduxstate.user.name;
};
export const selectUserFav = (reduxstate) => {
  return reduxstate.user.favorite;
};
