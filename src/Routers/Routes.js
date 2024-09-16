import MainLayouts from "../Components/Layouts/MainLayouts";
import Home from "../Pages/Home";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/design",
        element: <p>hello all</p>,
      },
    ],
  },
]);
