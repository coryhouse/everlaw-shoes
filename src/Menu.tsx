import { Food, foodTags, foods } from "./foods";
import { Card } from "./reusable/Card";

export function Menu() {
  function renderFood(food: Food) {
    return (
      <Card>
        <h2 className="text-2xl font-bold">{food.name}</h2>
        <p>{food.description}</p>
        <strong>${food.price}</strong>
      </Card>
    );
  }

  return (
    <>
      <h1>Menu</h1>
      <select>
        <option>Filter by tag</option>
        {foodTags.map((tag) => (
          <option>{tag}</option>
        ))}
      </select>
      <div className="flex flex-wrap">{foods.map(renderFood)}</div>
    </>
  );
}
