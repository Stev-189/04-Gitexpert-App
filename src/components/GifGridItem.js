import React from 'react'

export const GifGridItem = ({id, title,url}) => {//{...img} recivido de gifgrid
  // console.log({id, title,url});
  return (//render imagen junsto a su titulo
    //clas es una palabra recersavda de javascript porlotanto aqui se usa classname
    <div className='card animate__animated animate__zoomIn'>
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
  )
}
