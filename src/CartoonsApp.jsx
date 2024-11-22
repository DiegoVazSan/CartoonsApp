import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const CartoonsApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'DragonBall']);

    return (
        <>
            <h1>Cartoons App</h1>

            <AddCategory addNewCategory={ setCategories } />

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
}