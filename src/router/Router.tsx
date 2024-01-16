import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../components/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage
  }
])