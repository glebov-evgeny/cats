import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { catsActions } from '../store/cats';

import Intro from '../components/intro/Intro';



const MainPage = () => {
  const dispatch = useDispatch();
  const itemsQuantity = useSelector((state:any) => state.cats.itemsQuantity);

  type itemCard = {
    id: string,
    height: number,
    width: number,
    url: string,
  }

  type itemCardFavorite = {
    id: number,
    url: string,
  }

  const getAllCats = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}images/search?limit=8`, {
      headers: { 
        'content-type':"application/json",
        'x-api-key':  process.env.REACT_APP_API_KEY 
      },
    }).then((response) => {
      setCatsToStore(response.data);
    });
  }

  const setCatsToStore = (cats:any) => {
    cats.forEach((item:itemCard)=>{dispatch(catsActions.addItemToCart(item))})
  }

  const addFavorite = async(item:any) => {
    await axios.post(`${process.env.REACT_APP_API_URL}favourites`,
    { image_id: `${item.id}` },
    {
      headers: { 
        'content-type':"application/json",
        'x-api-key': process.env.REACT_APP_API_KEY 
      },
    }).then(()=>getFavoriteCats())  
  }

  const getFavoriteCats = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}favourites`, {
      headers: { 
        'content-type':"application/json",
        'x-api-key':  process.env.REACT_APP_API_KEY 
      },
    }).then((response) => {
      setFavoriteCatsToStore(response.data)
    });
  }

  const setFavoriteCatsToStore = (cats:any) => {
    cats.forEach((item:itemCardFavorite)=>{dispatch(catsActions.addItemToCartFavorite(item))})
  }

  useEffect(() => {
    if(!itemsQuantity) {
      getAllCats();
    }
  }, []);

  return (
    <React.Fragment>    
      <Intro addFavorite={addFavorite} />
    </React.Fragment>
  );
}

export default MainPage;