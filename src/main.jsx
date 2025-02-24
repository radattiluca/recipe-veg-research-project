import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RecipesProvider } from "./stores/RecipesContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsRecipe from "./components/pages/DetailsRecipe.jsx";
import PageContactUs from "./components/pages/ContactUs.jsx";
import PageAboutUs from "./components/pages/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/details/:recipeId",
    element: <DetailsRecipe></DetailsRecipe>,
  },
  {
    path: "/contactUs",
    element: <PageContactUs></PageContactUs>,
  },
  {
    path: "/aboutUs",
    element: <PageAboutUs></PageAboutUs>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipesProvider>
      <RouterProvider router={router} />
    </RecipesProvider>
  </StrictMode>
);
