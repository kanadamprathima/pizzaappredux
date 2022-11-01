import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/slice";

const AddPizzaForm = () => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new pizza:", name, des);
    dispatch(addPizza({ name, des }));
    setName(" ");
    setDes(" ");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add New Pizza </h2>
        <label>
          name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={des}
            onChange={(e) => setDes(e.target.value)}
          />
        </label>
        <button type="submit">add new pizza</button>
      </form>
    </div>
  );
};
export default AddPizzaForm;
