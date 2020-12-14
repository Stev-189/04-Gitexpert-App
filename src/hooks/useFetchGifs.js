import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


// los custom hooks son fnciones que nesesariamente no retornan jsx 
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(()=>{
    getGifs(category)// ejecuta fetch
    .then(imgs=>{// resultado positivo
      setState({
        data: imgs,
        loading: false
      });
    })
  },[category])// solo se ejecutar cunado la category cambie

  return state;//es le objeto
}
