import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/slice";

const AddPizzaForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new pizza:", name, description);
    dispatch(addPizza({ name, description }));
    setName(" ");
    setDescription(" ");
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">add new pizza</button>
      </form>
    </div>
  );
};
export default AddPizzaForm;
