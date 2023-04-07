import ky from "ky";
import { Food, NewFood } from "../foods";

export async function getFood(id: number): Promise<Food> {
  return ky.get("http://localhost:3001/foods/" + id).json();
}

export async function postFood(newFood: NewFood): Promise<Food> {
  return ky
    .post("http://localhost:3001/foods", {
      json: newFood,
    })
    .json();
}

export async function putFood(food: Food): Promise<Food> {
  return ky
    .put("http://localhost:3001/foods/" + food.id, {
      json: food,
    })
    .json();
}

export async function deleteFood(id: number): Promise<void> {
  return ky.delete("http://localhost:3001/foods/" + id).json();
}
