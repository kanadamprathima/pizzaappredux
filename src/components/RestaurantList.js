import { useSelector } from "react-redux";
import { selectRestaurants } from "../store/restaurants/selectors";

const RestaurantList = () => {
  const allRestaurants = useSelector(selectRestaurants);
  console.log(allRestaurants);
  return (
    <div>
      <h2>restaurants</h2>
      {!allRestaurants ? (
        <p>Loading...</p>
      ) : (
        allRestaurants.map((hotel, i) => {
          return <div key={i}>{hotel.name}</div>;
        })
      )}
    </div>
  );
};
export default RestaurantList;
