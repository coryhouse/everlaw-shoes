export default function ManageMenu() {
  return (
    <>
      <h1>Manage Menu</h1>

      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" className="border" />

        <label htmlFor="description">Description</label>
        <input id="description" type="text" className="border" />

        <label htmlFor="price">Price</label>
        <input id="price" type="text" className="border" />
      </form>
    </>
  );
}
