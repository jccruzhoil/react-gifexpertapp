import React from 'react'
import { useFetchGift } from '../hooks/useFetchGifs'
// import { getGift } from '../helpers/getGifs';
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {
    
    const {data:images,loading} = useFetchGift( category ); 
    console.log(loading);
    return (
        <>
            <h3> {category} </h3>
           
            {
                <div className="card-grid">            
                        {  
                            images.map( datos => 
                                
                                <GifGridItem 
                                    key= {datos.id}
                                    { ...datos } 
                                />
                            )
                        }                
                </div>
            }
        </>    
    )
}
