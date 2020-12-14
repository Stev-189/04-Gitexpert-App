import React, { useState} from 'react'
import PropTypes from 'prop-types';// para usar propiedades en nuestras funciones o componentes

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');// es obligatorio al usar el use state colocar unb valor inicial 

  const handleInputChange = e=>{
    // console.log(e.target.value);
    setInputValue(e.target.value);
    //haci actualizamos el texbox de arriva se hace un use state y refresca lo escrito
    // con esta funcion el imputValue simpre estara actualizado
  }

  const handleSubmit=e=>{
    e.preventDefault();
    if(inputValue.trim().length>2){// validamos que no sea  un elemento vacioy eliminamos los espacioniniciales y finales
      setCategories(cats=>[ inputValue, ...cats,]);// como envimaoms el setcategories con la funccion addcategory
      setInputValue('');// limpiamos el contenido del input
    }
    //estal ainvocmoas como los props, y ademas la desestructuramos
  }

  return (
    // <> // al usarun form ya sirve como fragment
    <form onSubmit={ handleSubmit }>
      < input
        type='text'
        value={ inputValue }
        // onChange= { e=>console.log(e) }
        onChange= { handleInputChange }//cunado escriva algo se ejecuta eñl usestate y refresca imput
      />
    </form>
    // </> // al usarun form ya sirve como fragment
  )
}

AddCategory.propTypes ={setCategories: PropTypes.func.isRequired} // le obligamos el usuario a que nos envie la funcion
