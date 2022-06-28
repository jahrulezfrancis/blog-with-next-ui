import React from 'react';
import MainCard from "./Card"
import "./card.css"

export default function CardIndex() {
   return (
      <>
         <div className='card-container'>
            <MainCard />
            <MainCard />
            <MainCard />
         </div>
         <div className='card-container'>
            <MainCard />
            <MainCard />
            <MainCard />
         </div>
      </>
   )
}
