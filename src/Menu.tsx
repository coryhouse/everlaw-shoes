import { useState } from "react";
import { Food, FoodTag, foodTags } from "./foods";
import { Card } from "./reusable/Card";
import { deleteFood } from "./services/foods.service";
import { Button } from "./reusable/Button";
import { Spinner } from "./reusable/Spinner";
import { Link } from "react-router-dom";
import { useGetFoodsQuery } from "./hooks/useGetFoodsQuery";

export function Menu() {
  const [tagFilter, setTagFilter] = useState<FoodTag | "">("");

  const getFoodsQuery = useGetFoodsQuery();

  // Derived state
  const filteredFoods = tagFilter
    ? getFoodsQuery.data.filter((food) => food.tags.includes(tagFilter))
    : getFoodsQuery.data;

  function renderFood(food: Food) {
    return (
      <Card key={food.id}>
        <Link to={"/manage/" + food.id}>
          <h2 className="text-2xl font-bold">{food.name}</h2>
        </Link>
        <p>{food.description}</p>
        <strong>${food.price}</strong>
        <Button
          className="block"
          onClick={() => {
            // Optimistic delete
            deleteFood(food.id);
            // setFoods(foods.filter((f) => f.id !== food.id));
          }}
          type="button"
          aria-label={"Delete " + food.name}
        >
          Delete
        </Button>
      </Card>
    );
  }

  function renderMenu() {
    return (
      <>
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

  return (
    <>
      {getFoodsQuery.isRefetching && <p>Checking for fresh data...</p>}
      <h1>Menu</h1>
      {
        <Spinner isLoading={getFoodsQuery.data.length === 0}>
          {renderMenu()}
        </Spinner>
      }
    </>
  );
}
