import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/admin/Dashboard";
import ReplayMessages from "../pages/admin/components/ReplayMessages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/replay_to/:email/:id",
        element: <ReplayMessages />,
      },
    ],
  },
]);

export default router;
