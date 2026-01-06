import { NavLink } from "react-router";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className="flex items-center justify-between ">
      <Logo />

      <ul className="flex items-center list-none justify-center gap-16">
        <li>
          <NavLink
            to={"/pricing"}
            className={({ isActive }) =>
              `pageNavLink ${isActive ? "text-[var(--color-brand--2)]" : "text-[var(--color-light--2)]"}`
            }
          >
            pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/product"}
            className={({ isActive }) =>
              `pageNavLink ${isActive ? "text-[var(--color-brand--2)]" : "text-[var(--color-light--2)]"}`
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

export default PageNav;
