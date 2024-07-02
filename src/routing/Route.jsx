// const { createBrowserRouter } = require("react-router-dom");
// const { default: App } = require("../App");
// const { default: Home } = require("../pages/Home/Home");

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
