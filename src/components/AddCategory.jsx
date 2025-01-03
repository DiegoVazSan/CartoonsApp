import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const cleanValue = inputValue.trim();
        if( cleanValue.length <= 1 ) return;
        onNewCategory(cleanValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar GIFS"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}