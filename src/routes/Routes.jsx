import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Event from "../pages/Event/Event";
import PrivateRoute from "./PrivateRoute";
import OurTeam from "../pages/OurTeam/OurTeam";
import About from "../pages/About/About";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/events.json')
        },
        {
            path: '/event/:_id',
            element: <PrivateRoute><Event></Event></PrivateRoute>,
            loader: () => fetch('/events.json')
        },
        {
            path: '/team',
            element: <PrivateRoute><OurTeam></OurTeam></PrivateRoute>
        },
        {
            path: '/about',
            element: <PrivateRoute><About></About></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;