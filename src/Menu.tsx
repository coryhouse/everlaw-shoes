import { Food, foods } from "./foods";

export function Menu() {
  function renderFood(food: Food) {
    return (
      <div className="max-w-sm p-4 m-2 transition-colors bg-blue-100 border border-gray-400 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white">
        <h2 className="text-2xl font-bold">{food.name}</h2>
        <p>{food.description}</p>
        <strong>${food.price}</strong>
      </div>
    );
  }

  return (
    <>
      <h1>Menu</h1>
      <div className="flex flex-wrap">{foods.map(renderFood)}</div>
    </>
  );
}
