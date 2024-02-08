import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const Layout: FC = () => {
  return (
    <main>
      <Header />
      <div className="min-h-[calc(100vh-165px)]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
