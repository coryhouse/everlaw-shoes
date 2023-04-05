import ky from "ky";
import { Food, NewFood } from "../foods";

export async function getFoods(): Promise<Food[]> {
  return ky.get("http://localhost:3001/foods").json();
}

export async function postFood(newFood: NewFood): Promise<Food> {
  return ky
    .post("http://localhost:3001/foods", {
      json: newFood,
    })
    .json();
}
