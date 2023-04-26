import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Main from "./pages/Main";
import Favorite from "./components/favorite/Favorite";
import Error from "./pages/Error";

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    
    children: [
      { path:'/', element: <Main /> },
      { path:'/favorite', element: <Favorite /> },
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
