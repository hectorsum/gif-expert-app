import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

  const {data:images,loading} = useFetchGifs(category);
  // const [images, setImages] = useState([]);

  //const [count, setCount] = useState(0);
  //* La funcion solo se va disparar una sola vez gracias al useEffect
  //* Solo se ejecuta la funcion cuando el componente es renderizado una vez
  // useEffect(()=>{
  //   getGifs(category)
  //   // .then(resp => setImages(resp)) 
  //   .then(setImages);
  // },[category]); //Si categoria hace un cambia, se vuelve a ejecutar el efecto
  // const {data,loading} = useFetchGifs();
  // console.log(loading,data);
  console.log(images);
  return (
    <>
      <h3>{category}</h3>
      { loading && <h1 className="animate__animated animate__flash">Loading</h1> }
      <div className="card-grid">
        {
        images.map(img => (
          <GifGridItem key={img.id} {...img}/>
        ))
        }
      </div>
    </>
  )
}
