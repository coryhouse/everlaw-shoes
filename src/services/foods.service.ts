import ky from "ky";
import { Food } from "../foods";

export async function getFoods(): Promise<Food[]> {
  return ky.get("http://localhost:3001/foods").json();
}
