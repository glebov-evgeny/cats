import React from 'react';
import {useSelector } from 'react-redux';

import Card from '../_ui/card/Card';
import './Favorite.scss';



function Favorite(props:any) {
  const allFavoritesCats = useSelector((state:any) => state.cats.favoriteItems);

  return (
    <section className="favorite">
      <div className="favorite__container container">
        <div className="favorite__box">
          {allFavoritesCats.map((item:any)=> <Card key={item.id} item={item} handlerFunction={props.removeFavorite} />)}
        </div>
      </div>
    </section>
  );
}

export default Favorite;
