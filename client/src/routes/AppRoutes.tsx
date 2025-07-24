import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  PricingPage,
  PublicLayout,
} from "../features/public";
import {
  LoginPage,
  RegisterPage,
  ForgetPasswordPage,
  AuthLayout,
} from "../features/auth";
import {
  DashboardHome,
  DashboardLayout,
  ProductPage,
  OrderPage,
  SalesBoostPage,
  AppsPage,
  LandingPage,
  DeliveryPricePage,
  AnalyticsPages,
  LeadsPage,
  CreateProductPage,
  CreateOrderPage,
  CreateLeadPage,
  CreateSalePage,
  CreateLandingPage,
} from "../features/dashboard";

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
  {
    path: "/",
    element: <AuthLayout />,

    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot-password",
        element: <ForgetPasswordPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "products/create",
        element: <CreateProductPage />,
      },
      {
        path: "orders",
        element: <OrderPage />,
      },
      {
        path: "orders/create",
        element: <CreateOrderPage />,
      },
      {
        path: "sales-boost",
        element: <SalesBoostPage />,
      },
      {
        path: "sales-boost/create",
        element: <CreateSalePage />,
      },
      {
        path: "apps",
        element: <AppsPage />,
      },
      {
        path: "landing",
        element: <LandingPage />,
      },
      {
        path: "landing/create",
        element: <CreateLandingPage />,
      },
      {
        path: "delivery",
        element: <DeliveryPricePage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPages />,
      },
      {
        path: "leads",
        element: <LeadsPage />,
      },
      {
        path: "leads/create",
        element: <CreateLeadPage />,
      },
    ],
  },
]);
