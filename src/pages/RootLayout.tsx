import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Loader from '../components/loader/Loader';

function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);
  
  return (
    <>
    {loading && <Loader />}
    <Header/>
    <main className="main">
      <Outlet />
    </main>
    </>
  )
}

export default RootLayout;