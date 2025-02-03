import { useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])
  return (
    <div className="mx-auto max-w-screen-xl">
        <MainLayout />
    </div>
  );
};

export default App;
