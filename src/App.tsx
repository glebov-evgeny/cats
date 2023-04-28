import React, {useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import MainPage from "./pages/Main";
import FavoritePage from "./pages/Favorite";
import ErrorPage from "./pages/Error";

import getAllCats from "./api/getAllCats";
import getAllFavorites from "./api/getAllFavorites";
import { useDispatch } from "react-redux";
import { catsActions } from "./store/cats";


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
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(catsActions.setLoading())
    try {
      getAllCats(4).then((response) => dispatch(catsActions.setData(response)))
      getAllFavorites().then((response) =>{dispatch(catsActions.setDataFavorites(response))})
    } catch (error) {
      console.error('Ошибка: ' + error)
    }
  }, [dispatch])


  return (
    <RouterProvider router={router} />
  );
};

export default App;
