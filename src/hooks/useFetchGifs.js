// hooks = funcion
import  { useEffect, useState } from 'react';
import { getGift } from '../helpers/getGifs';

export const useFetchGift = ( category  ) => {
    console.log(category)
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGift( category )
            .then( imgs => {                             
                setstate({
                    data: imgs,
                    loading: false
                });                    
                
            })
    }, [ category ] )



    return state;

}