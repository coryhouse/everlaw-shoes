import toast from "react-hot-toast";
import { Button } from "./reusable/Button";
import { Input } from "./reusable/Input";
import { useNavigate, useParams } from "react-router-dom";
import { getFood, postFood, putFood } from "./services/foods.service";
import { Food, NewFood } from "./foods";
import { useEffect, useState } from "react";
import { Spinner } from "./reusable/Spinner";

const newFood: NewFood = {
  name: "",
  description: "",
  price: 0,
  image: "",
  tags: [],
};

export default function ManageMenu() {
  const [food, setFood] = useState<Food | NewFood>(newFood);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchFood() {
      try {
        if (!id) {
          setIsLoading(false);
          return;
        }
        // if (!Number.isInteger(id)) throw new Error("Invalid id");
        const food = await getFood(parseInt(id, 10));
        setFood(food);
        setIsLoading(false);
      } catch (error) {
        setError("Fetch failed.");
      }
    }
    fetchFood();
  }, []);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFood({ ...food, [event.target.id]: event.target.value });
  }

  function renderForm() {
    return (
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          id ? await putFood(food as Food) : await postFood(food);
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
    );
  }

  if (error) throw new Error(error);

  return (
    <>
      <h1>{id ? "Edit" : "Add"} Menu Item</h1>
      {!isLoading ? renderForm() : <Spinner />}
    </>
  );
}
