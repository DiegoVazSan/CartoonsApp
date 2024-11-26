import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const CartoonsApp = () => {

    const [categories, setCategories] = useState(['DragonBall']);

    const addNewCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Cartoons App</h1>

            <AddCategory
                onNewCategory={(value) => addNewCategory(value)}
                currentCategories={categories}
            />


            {
                   categories.map(category => (
                    <GiftGrid
                        key={category}
                            category={category}
                    />
                ))
            }

        </>
    );
}