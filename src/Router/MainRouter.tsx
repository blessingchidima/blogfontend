import { createBrowserRouter } from "react-router-dom";
import MediumScreen from "../Pages/MediumScreen";
import MediumRegister from "../Pages/MediumRegister";
import MediumSignIn from "../Pages/MediumSignIn";
import MediumPostScreen from "../Pages/MediumPostScreen";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MediumScreen />,
  },
  {
    path: "/register",
    element: <MediumRegister />,
  },
  {
    path: "/sign-in",
    element: <MediumSignIn />,
  },
  {
    path: "/write",
    element: <MediumPostScreen />,
  },
]);
