import toast from "react-hot-toast";
import { Button } from "./reusable/Button";
import { Input } from "./reusable/Input";
import { useNavigate } from "react-router-dom";
import { postFood } from "./services/foods.service";
import { NewFood } from "./foods";
import { useState } from "react";

const newFood: NewFood = {
  name: "",
  description: "",
  price: 0,
  image: "",
  tags: [],
};

export default function ManageMenu() {
  const [food, setFood] = useState(newFood);
  const navigate = useNavigate();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFood({ ...food, [event.target.id]: event.target.value });
  }

  return (
    <>
      <h1>Manage Menu</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await postFood(food);
          toast.success("Menu Item Saved.");
          navigate("/");
        }}
      >
        <Input id="name" label="Name" value={food.name} onChange={onChange} />
        <Input
          id="description"
          label="Description"
          value={food.description}
          onChange={onChange}
        />
        <Input
          id="price"
          label="Price"
          type="number"
          value={food.price.toString()}
          onChange={onChange}
        />
        <Button type="submit">Save Menu Item</Button>
      </form>
    </>
  );
}
