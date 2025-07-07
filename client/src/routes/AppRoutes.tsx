import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  PricingPage,
  PublicLayout,
} from "../features/public";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "pricing",
        element: <PricingPage />,
      },
    ],
  },
]);
