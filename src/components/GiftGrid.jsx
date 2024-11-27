import { useEffect, useState } from 'react';
import { getGigfs } from '../helpers/getGifs'
import { GiftItem } from './GiftItem';

export const GiftGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGigfs(category)
            .then(newImages => setImages(newImages));

    }, [])

    return (
        <>
            <h3> {category} </h3>
            <div className='card-grid'>
                {
                    images.map(( img ) => (
                        <GiftItem
                        key={ img.id } 
                        { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}

