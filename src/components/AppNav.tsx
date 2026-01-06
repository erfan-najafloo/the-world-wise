import { NavLink } from "react-router";
import Logo from "./Logo";

function AppNav() {
  return (
    <nav className="flex items-center justify-between ">
      <NavLink to={"/"}>
        <Logo />
      </NavLink>

      <ul className="flex flex-row items-center justify-center gap-16">
        <li>
          <NavLink
            to={"/pricing"}
            className={({ isActive }) =>
              `navLink ${isActive ? "text-[var(--color-brand--2)]" : "text-[var(--color-light--2)]"}`
            }
          >
            pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/product"}
            className={({ isActive }) =>
              `navLink ${isActive ? "text-[var(--color-brand--2)]" : "text-[var(--color-light--2)]"}`
            }
          >
            product
          </NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className="ctaLink">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
