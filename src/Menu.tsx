import { Food, foods } from "./foods";

export function Menu() {
  function renderFood(food: Food) {
    return (
      <li>
        {food.name} - ${food.price}
      </li>
    );
  }

  return (
    <>
      <h1>Menu</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul>{foods.map(renderFood)}</ul>
    </>
  );
}
