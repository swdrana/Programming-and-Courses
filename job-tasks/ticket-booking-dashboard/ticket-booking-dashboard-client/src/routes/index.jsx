import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home";
import PrivateRoute from "../components/PrivateRoute";
import BookingTicket from "../pages/BookingTicket/BookingTicket";
import PublicRoute from "../components/PublicRoute";
import EventDetails from "../pages/EventDetails/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <BookingTicket />
          </PrivateRoute>
        ),
      },
      {
        path: "/events/:eventId",
        element: (
          <PrivateRoute>
            <EventDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
