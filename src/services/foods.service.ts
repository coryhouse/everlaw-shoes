import { Food } from "../foods";

export async function getFoods(): Promise<Food[]> {
  const resp = await fetch("http://localhost:3001/foods");
  if (!resp.ok) throw resp;
  return resp.json();
}
