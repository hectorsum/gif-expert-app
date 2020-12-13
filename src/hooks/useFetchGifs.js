import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs';
//Hook
export const useFetchGifs = ( category ) =>{
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(()=>{
    getGifs(category)
    .then(resp => {
      setTimeout(() => {
        setState({
            data: resp,
            loading:false
        })
      }, 500)
    });
  },[category]) //Se dispara el efecto cuando la categoria cambia

  // setTimeout(() => {
  //   setState({
  //     data: [1,2,3,4],
  //     loading: false
  //   })
  // }, 3000);

  return state; //{ data:[], loading,true}
}
//* Functional Component, regresa jsx
// export const useFetchGifs = () =>{
//   return(
//     <div>

//     </div>
//   )
// }