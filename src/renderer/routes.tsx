import { Route } from "react-router-dom";
import { Router } from "lib/electron-router-dom";
import Home from "./screens/home";
import Settings from "./screens/settings";

export function AppRoutes() {
  const mainRoutes = [
      <Route key="home" element={<Home />} path="/" />,
      <Route key="settings" element={<Settings />} path="/settings" />
  ];

  return <Router main={mainRoutes} />;
}
