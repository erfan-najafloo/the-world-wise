import { NavLink } from "react-router";

function AppNav() {
  return (
    <nav className="mt-12 mb-8">
      <ul className="list-none flex bg-[var(--color-dark--2)] rounded-lg">
        <li>
          <NavLink
            to={"cities"}
            className={({ isActive }) =>
              `appNavLink ${isActive ? "bg-[var(--color-dark--0)]" : ""}`
            }
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"countries"}
            className={({ isActive }) =>
              `appNavLink ${isActive ? "bg-[var(--color-dark--0)]" : ""}`
            }
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
