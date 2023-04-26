import React, { useEffect,useState } from 'react';
import axios from "axios";
import Intro from '../components/intro/Intro';

const Main = () => {
  const baseURL = "https://api.thecatapi.com/v1/images/search?api_key=live_GDgls3QpMb5h7BQfNG66jOeBYLWdQQhQLj9HOCkLs5jdKrd4flBDreiHZASEgk0Q&limit=8";
  const [allCats, setAllCats] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAllCats(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Intro allCats={allCats} />
    </React.Fragment>
  );
}

export default Main;