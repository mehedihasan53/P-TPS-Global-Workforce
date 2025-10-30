import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About_us from "../pages/About_us";
import Contact from "../pages/Contact";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ErrorPage from "../Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/about-us",
        Component: About_us,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
    ],
  },
]);
