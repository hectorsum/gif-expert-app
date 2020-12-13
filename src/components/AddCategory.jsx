import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  //* El estado tiene que inicializarse con algun valor y no debe estar vacio para evitar el undefined y el cambio de estado al enviar valores del input
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) =>{
    console.log(e.target.value);
    return setInputValue(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault(); //Prevent behavior of form
    //Delete blank spaces b4 and after
    if ( inputValue.trim().length>2){
      setCategories(cats => [inputValue,...cats]);
      setInputValue(''); //For cleaning input tag
    }
  }
  return (
    <> 
      <form onSubmit={handleSubmit}>
        <input type="text" 
                placeholder="Insert Category" 
                value={inputValue} 
                onChange={handleInputChange}/>
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}