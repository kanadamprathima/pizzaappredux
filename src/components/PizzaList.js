import { selectPizzas } from "../store/pizzas/selectors";
import styled from "styled-components";
import { useSelector } from "react-redux";
const PizzaList = () => {
  const pizzas = useSelector(selectPizzas);
  return (
    <div>
      <h1>Pizza explorer</h1>
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
