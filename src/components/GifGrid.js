import React from 'react'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {


  // const [images, setImages] = useState([])

  //custom hooks
  const { data: images, loading} = useFetchGifs(category);
  


  // //al realisar un usestate se ejecuta toda la funcion denuevo lo que hace que se ejecute la fetch nuevamente
  // //si usame useEffect solo se ejecutar la primera ves la funcion de la fetch
  // useEffect(()=>{
  //   // getGifs()// llamamos al helpers de busqueda de imagenes
  //   getGifs(category)
  //     .then(setImages);
  // }, [category])


  // }, [])// al estare esta array vacio solo ejecuta el getgidt solo 1 vez y no cada vez que lo solicite el
  //el usestate
  // ejemplo de fetch asincrona optimmisando los resultados
  // const getGifs= async ()=>{
  //   const url =`https://api.giphy.com/v1/gifs/search?&q=${ encodeURI(category)}&limit=10&api_key=I148jVo474BYYIbVckgOwBC5Xbc1du8m`
  //   //encodeURI() completa los espacios ( ) por mas (+)
  //   const resp = await fetch(url);
  //   // const data = await resp.json();// desestructuramos y solo sacamos la data
  //   const {data} = await resp.json();// desestructuramos y solo sacamos la data
  //   const gifs = data.map(img=>{// generemos un array solo con los datos nesesarios
  //     return {
  //       id: img.id,
  //       title: img.title,
  //       url: img.images?.downsized_medium.url//es apra validar que traiga imagenes
  //     }
  //   })
  //   console.log(gifs);
  //   setImages(gifs);
  // }

  
  return (
    <>
      <h3 className= 'animate__animated animate__zoomIn'> {category} </h3>

      {/* custom hooks */}
      {/* loading?'Cargando...':'Data Cargada' */}
      {loading && <p>Loading...</p>}{/* se usa && para solo validar y hacerr algo enves de usa ?: */}
      <div className='card-grid'>
        {/* <ol>
          {
            // images.map(img=>{return <li key={img.id}> {img.title} </li>})// esta bine pero le profe
          // images.map(({id, title})=><li key={id}> {title} </li>)// esta bien pero el profe
        }
        </ol> */}
        {/* {
          images.map(img=>
            <GifGridItem 
              key= {img.id}//no se envio la key se genero aqui
              // img={img}
              {...img} // es lo mismo que le de arriba
              />)// render con componente
        } */}

        {/* custom Hooks */}
        {
          images.map(img=>
            <GifGridItem 
              key= {img.id}//no se envio la key se genero aqui
              // img={img}
              {...img} // es lo mismo que le de arriba
              />)// render con componente
        }
      </div>
    </>
  )
}
