import React from 'react'
// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Posteos es el padre de: ヽ(●ﾟ´Д｀ﾟ●)ﾉﾟ
// - Post (multiplicados por lo que haya en el listado JSON)
// ESTADO: Posteos no necesita manejar un estado.
// MÉTODOS: Posteos no requiere de métodos.
// PROPS: Posteos recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos junto con el resto de las props que necesitan.

import posts from './data.json';
import Post from './Post';


export default function Posteos({setLikesTotales}) {
  return (
    <div className='container'>
      {posts.map(post => <Post info={post} setLikesTotales={setLikesTotales}/>)}
    </div>
  )
}
