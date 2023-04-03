import { useState } from "react";
import { Food, FoodTag, foodTags, foods } from "./foods";
import { Card } from "./reusable/Card";

export function Menu() {
  const [tagFilter, setTagFilter] = useState<FoodTag | null>(null);

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
      {tagFilter}
      <select
        value={tagFilter ?? ""}
        onChange={(event) => setTagFilter(event.target.value as FoodTag)}
      >
        <option value="">Filter by tag</option>
        {foodTags.map((tag) => (
          <option value={tag}>{tag}</option>
        ))}
      </select>
      <div className="flex flex-wrap">{foods.map(renderFood)}</div>
    </>
  );
}
