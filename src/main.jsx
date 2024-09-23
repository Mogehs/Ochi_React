import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "././Pages/Home";
import Services from "././Pages/Services";
import Work from "././Pages/Work";
import AboutUs from "././Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/our-work", element: <Work /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact-us", element: <ContactUs /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
