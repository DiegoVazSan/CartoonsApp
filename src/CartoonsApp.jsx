import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const CartoonsApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'DragonBall']);

    const addNewCategory = (newCategory) => {
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>Cartoons App</h1>

            <AddCategory
                //addNewCategory={setCategories}
                onNewCategory = { (value) => addNewCategory(value) }
            />

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