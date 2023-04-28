import React from 'react';
import {useSelector } from 'react-redux';

import CardFavorite from '../_ui/cardFavorite/CardFavorite';
import './Favorite.scss';



function Favorite(props:any) {
  const allFavorites = useSelector((state:any) => state.cats.itemsFavorites);

  return (
    <section className="favorite">
      <div className="favorite__container container">
        <div className="favorite__box">
          {allFavorites.map((item:any)=> <CardFavorite key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default Favorite;
