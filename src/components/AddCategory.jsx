
import React, { useState } from 'react'

const AddCategory = ({onInputValue}) => {

    const [valueInput, setValueInput] = useState('');

    const onInputChange = (event) => {
        setValueInput(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(valueInput.trim().length <= 1) return;
        onInputValue(valueInput);
        setValueInput('')
    }


    return (
        <form onSubmit={ (event) => onSubmit(event) } >
            <input
                type='text'
                placeholder='Insert Gif'
                value={valueInput}
                onChange={(event) => onInputChange(event)}
            >
            </input>
        </form>
    )
}

export default AddCategory
