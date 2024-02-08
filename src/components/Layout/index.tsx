import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const Layout: FC = () => {
  return (
    <main>
      <Header />
      <div className="min-h-[calc(100vh-80px)] bg-gray-200 flex justify-center items-center">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
