import { Outlet, useLocation } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar.jsx";
import DefaultNavbar from "../components/DefaultNavbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Layout() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      {isLandingPage ? <LandingNavbar /> : <DefaultNavbar />}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
