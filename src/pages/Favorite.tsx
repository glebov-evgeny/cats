import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { catsActions } from '../store/cats';

import Favorite from '../components/favorite/Favorite';


const FavoritePage = () => {
  const dispatch = useDispatch();

  type itemCardFavorite = {
    id: number,
    url: string,
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

  const removeFavorite = async (item:any) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}favourites/${item.id}`, {
      headers: { 
          'content-type':"application/json",
          'x-api-key': process.env.REACT_APP_API_KEY 
        },
    }).then(() => {
      dispatch(catsActions.removeItemFromFavorite(item.id))
    })

  }

  useEffect(() => {
    getFavoriteCats();
  }, []);

  return (
    <React.Fragment>
      <Favorite removeFavorite={removeFavorite}/>
    </React.Fragment>
  );
}

export default FavoritePage;