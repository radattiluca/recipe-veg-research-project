import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import pages
import App from "./components/app/App.jsx";
import DetailsRecipe from "./pages/pageDetailsRecipe/DetailsRecipe.jsx";
import PageContactUs from "./pages/pageContactUs/ContactUs.jsx";
import PageAboutUs from "./pages/pageAboutUs/AboutUs.jsx";

// import store
import { RecipesProvider } from "./stores/RecipesContext.jsx";

// import router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
