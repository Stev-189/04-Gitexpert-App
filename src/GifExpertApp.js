import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp =()=>{

  //const categories =['One Pucha','Samurai X','Dragon Ball'] // no usar a menos que se elemento unico y no modificable
  const [categories, setCategories] = useState(['One Punch Man'])// como va avariaar usar useState
  
  //agregamos elemnto al array y renderisamos
  // const handleAdd=_=>{
  //   // setCategories([...categories, 'HunterXHunter'])//AGREGA AL FINAL copia original y agrega
  //   // setCategories(['HunterXHunter', ...categories])//AGRGA AL INICIO
  //   setCategories(cats=>[...cats, 'HunterXHunter'])
  // };

  
  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories= { setCategories }/>{/* enviamosla funcion set categoreies alo add categories */}
      <hr></hr>
      {/* <button onClick={handleAdd}> Agregar </button> */}
      <ol>
        
        {// para agregar javascriot
          // se itera la renderizacion
          // categories.map(category=>{
          //   //siempre debe llevar una key unica en este caso usaremos las categorias del array
          //   //la key no s epouede repetir
          //   return <li key={category}> {category} </li>
          // })
          categories.map(category=>
            <GifGrid 
              key = {category}
              category= { category }
            /> //envimaos a gif grid category que es el elemento category dle siclo osea dle array
          )
          
        }
      </ol>
    </>
  )
}
