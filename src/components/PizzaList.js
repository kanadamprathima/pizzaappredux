import {
  selectPizzas,
  selectNumberOfPizzas,
  selectMostBoughtPizza,
} from "../store/pizzas/selectors";
import { selectUser } from "../store/user/selectors";
import styled from "styled-components";
import { useSelector } from "react-redux";
const PizzaList = () => {
  const pizzas = useSelector(selectPizzas);
  const pizzasLength = useSelector(selectNumberOfPizzas);
  const mostbought = useSelector(selectMostBoughtPizza);
  const username = useSelector(selectUser);
  return (
    <div>
      <h1>Pizza explorer</h1>
      <h2>
        Welcome back! <strong>{username}</strong>
      </h2>
      <h4>
        there are <strong>{pizzasLength} </strong>pizzas.
        <br />
      </h4>

      {pizzas.map((pizza) => {
        return (
          <MapContainer key={pizza.id}>
            <img src={pizza.image} style={{ width: 200 }} alt="pizzapic" />
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
          </MapContainer>
        );
      })}
    </div>
  );
};
const MapContainer = styled.div`
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 10px 10px RGBA(0, 0, 0, 0.1);
`;
export default PizzaList;
