import Map from "../components/Map";
import SideBar from "../components/SideBar";

function AppLayout() {
  return (
    <div className="flex h-screen p-[2.4rem] overscroll-y-none relative ">
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
