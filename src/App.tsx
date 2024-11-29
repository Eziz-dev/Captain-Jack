import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import ConfirmationPage from "./pages/ConfirmationPage.tsx";
import MainPage from "./pages/MainPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>404 not found</div>, // change hardcode to page component
  },
  {
    path: "confirmation",
    element: <ConfirmationPage />,
  },
  {
    path: "confirmation/main",
    element: <MainPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
