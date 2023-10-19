import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../pages/Home/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This will make this the default route.
        element: <Home />,
      },
    ],
  },
]);

export default routes;
