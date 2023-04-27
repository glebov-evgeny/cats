import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MainPage from "./pages/Main";
import FavoritePage from "./pages/Favorite";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,      
    children: [
      { path:'/', element: <MainPage /> },
      { path:'/favorite', element: <FavoritePage/>},
    ]
  },
], {
  basename: process.env.REACT_APP_BASE_URL
});

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
