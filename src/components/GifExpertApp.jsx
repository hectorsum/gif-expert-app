import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = props => {
  //const categories = ['One Punch','Samurai X','Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch']);
  // const handleAdd = () =>{
  //   setCategories([...categories,'The Flash']);
  //   //* Valor de estado anterior + Nuevo estado
  //   setCategories(cats => [...cats,'The Flash']);
  // }
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>
      <ol>
        {
        categories.map( category => (
          <GifGrid key={category} category={category}/>
        ))
        }
      </ol>
    </>
  );
};

export default GifExpertApp
