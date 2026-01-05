import Logo from "./Logo";

function AppNav() {
  return (
    <nav className="flex items-center justify-between ">
      <Logo />

      <ul className="flex flex-row items-center justify-center gap-16">
        <li>
          <a className="navLink">pricing</a>
        </li>
        <li>
          <a className="navLink">product</a>
        </li>
        <li>
          <a className="ctaLink">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
