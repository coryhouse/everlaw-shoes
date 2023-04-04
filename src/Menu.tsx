import { useEffect, useState } from "react";
import { Food, FoodTag, foodTags } from "./foods";
import { Card } from "./reusable/Card";
import { getFoods } from "./services/foods.service";

export function Menu() {
  const [tagFilter, setTagFilter] = useState<FoodTag | "">("");
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    getFoods().then((foods) => setFoods(foods));
    // Empty array means only run this once after the first render.
  }, []);

  // Derived state
  const filteredFoods = tagFilter
    ? foods.filter((food) => food.tags.includes(tagFilter))
    : foods;

  function renderFood(food: Food) {
    return (
      <Card key={food.id}>
        <h2 className="text-2xl font-bold">{food.name}</h2>
        <p>{food.description}</p>
        <strong>${food.price}</strong>
      </Card>
    );
  }

  return (
    <>
      <h1>Menu</h1>
      <label htmlFor="tag-filter-select">Filter by tag</label>
      <br />
      <select
        id="tag-filter-select"
        value={tagFilter}
        onChange={(event) => setTagFilter(event.target.value as FoodTag)}
      >
        <option value="">All items</option>
        {foodTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {tagFilter && (
        <p>{`${filteredFoods.length} ${tagFilter} items found.`}</p>
      )}

      <div className="flex flex-wrap">{filteredFoods.map(renderFood)}</div>
    </>
  );
}
