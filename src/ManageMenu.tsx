import toast from "react-hot-toast";
import { Button } from "./reusable/Button";
import { Input } from "./reusable/Input";

export default function ManageMenu() {
  return (
    <>
      <h1>Manage Menu</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          toast.success("Menu Item Saved.");
        }}
      >
        <Input id="name" label="Name" />
        <Input id="description" label="Description" />
        <Input id="price" label="Price" type="number" />
        <Button type="submit">Save Menu Item</Button>
      </form>
    </>
  );
}
