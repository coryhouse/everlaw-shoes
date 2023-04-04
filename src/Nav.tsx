import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
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
