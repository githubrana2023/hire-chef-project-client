import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ChefRecipes from "../Components/ChefRecipes";
import PrivateRoute from "../Components/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "chef/:chefId",
        element: (
          <PrivateRoute>
            <ChefRecipes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-rtrana2023-gmailcom.vercel.app/chefs/${params.chefId}`),
      },
    ],
  },
]);

export default router;
