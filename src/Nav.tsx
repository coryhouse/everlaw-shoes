import { Link } from "react-router-dom";
import { useUserContext } from "./context/UserContext";

export function Nav() {
  const user = useUserContext();

  return (
    <nav>
      <p>Hello {user.name}</p>
      <ul>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/manage">Manage Menu</Link>
        </li>
      </ul>
    </nav>
  );
}
