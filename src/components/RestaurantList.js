import { useSelector } from "react-redux";
import { selectRestaurants } from "../store/restaurants/selectors";
import { selectRestaurantsWithPizzas } from "../store/selectors";

const RestaurantList = () => {
  const allRestaurants = useSelector(selectRestaurants);
  const restaurant = useSelector(selectRestaurantsWithPizzas);

  console.log(allRestaurants);
  return (
    <div>
      <h2>restaurants</h2>
      {!restaurant ? (
        <p>Loading...</p>
      ) : (
        restaurant.map((hotel, i) => {
          return (
            <div key={i}>
              <h2>{hotel.name}</h2>
              <ul>
                {hotel.pizzas.map((p) => (
                  <li>{p.name}</li>
                ))}
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
};
export default RestaurantList;
