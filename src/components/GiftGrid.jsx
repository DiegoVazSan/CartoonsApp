import { useEffect, useState } from 'react';
import { getGigfs } from '../helpers/getGifs'

export const GiftGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGigfs(category)
        .then( newImages => setImages(newImages) );

    }, [])

    return (
        <>
            <h3> {category} </h3>
            <ol>
                {
                    images.map( ({id, title}) => (
                        <li key={id}>{ title }</li>
                    ))
                }
            </ol>
        </>
    )
}

