import { NavLink } from "react-router";

function Logo() {
  return (
    <div>
      <NavLink to={"/"}>
      <img
        src="/logo.png"
        alt="World Wise Logo"
        className="h-20
      "
      />
      </NavLink>
    </div>
  );
}

export default Logo;
