import toast from "react-hot-toast";
import { Button } from "./reusable/Button";
import { Input } from "./reusable/Input";
import { useNavigate } from "react-router-dom";

export default function ManageMenu() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Manage Menu</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          toast.success("Menu Item Saved.");
          navigate("/");
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
