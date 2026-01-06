import { Outlet } from "react-router";
import AppNav from "./AppNav";
import Logo from "./Logo";

function SideBar() {
  return (
    <div className="flex flex-col basis-4xl items-center h-[calc(100vh - 4.8rem)] bg-(--color-dark--1) pt-12 pr-20 pb-14 pl-20">
      <Logo />
      <AppNav />
      <Outlet />
      <footer className="mt-auto">
        <p className="text-xl text-(--color-light--1)">
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
