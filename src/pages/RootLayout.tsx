import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Loader from '../components/loader/Loader';
import { useSelector } from "react-redux";

function RootLayout() {
  const isLoading = useSelector((state:any) => state.cats.loading);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 100);
  // }, []);
  
  return (
    <>
    {isLoading && <Loader />}
    <Header/>
    <main className="main">
      <Outlet />
    </main>
    </>
  )
}

export default RootLayout;