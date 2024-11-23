import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const CartoonsApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'DragonBall']);

    const addNewCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        <>
            <h1>Cartoons App</h1>

            <AddCategory
                onNewCategory = { (value) => addNewCategory(value) }
                currentCategories = { categories }
            />

            <ol>
                {
                    categories.map(category => {
                        return <li key={ category }>{category}</li>
                    })
                }
            </ol>
        </>
    );
}