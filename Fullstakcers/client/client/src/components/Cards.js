import React from 'react';
import './CSS/Cards.css';
import CardItem from './CardItem';



function Cards() {
  return (
    <div className='cards'>
      <h1>Choose courses that you like!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/course1.jpg'
              text='Maths de base 1'
              label='Maths'
              path='/cours'
            />
            <CardItem
              src='images/course2.png'
              text='React Front'
              label='IT'
              path='/cours'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/course3.png'
              text='Mathematiques de base 3'
              label='Maths'
              path='/cours'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;