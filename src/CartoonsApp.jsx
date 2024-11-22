import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const CartoonsApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'DragonBall']);

    const onAddCategory = () => {
        setCategories([...categories, 'Nabruto']);
    }

    return (
        <>
            <h1>Cartoons App</h1>

            <AddCategory />

            <button onClick={ onAddCategory }>Add</button>

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