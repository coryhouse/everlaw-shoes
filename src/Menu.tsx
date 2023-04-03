import { Food, foods } from "./foods";

export function Menu() {
  function renderFood(food: Food) {
    return <li>{food.name}</li>;
  }

  return (
    <>
      <h1>Menu</h1>
      <ul>{foods.map(renderFood)}</ul>
    </>
  );
}
