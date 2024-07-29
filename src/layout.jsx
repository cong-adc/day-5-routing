import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          height: "50px",
          backgroundColor: "#fff123",
        }}
      >
        Header Layout
      </header>
      <Outlet />
    </div>
  );
}
