import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../_ui/card/Card';
import './Intro.scss';


function Intro(props:any) {
  const allCats = useSelector((state:any) => state.cats.items);


  return (
    <section className="intro">
      <div className="container">
        <div className="intro__box">
          {allCats.map((item:any)=> <Card key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default Intro;
