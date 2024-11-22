import { useState } from 'react';

export const AddCategory = ({ addNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        addNewCategory( categories => [ inputValue, ...categories ]);
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