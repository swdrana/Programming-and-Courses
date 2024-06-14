import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home";
import PrivateRoute from "../components/PrivateRoute";
import BookingTicket from "../pages/BookingTicket/BookingTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    //   loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/booking",
        element: <PrivateRoute />,
        children: [
          {
            path: "",
            element: <BookingTicket />,
          },
        ],
      },
    ],
  },
]);

export default router;
