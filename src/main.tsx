import { createRoot } from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import App from "./App.tsx";
import "./index.css";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/loading");
    }
  }, [navigate]);

  return <App />;
};

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
