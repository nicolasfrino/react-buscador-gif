import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputvalue, setinputvalue] = useState('');

    const handleInputChange = (e) => {
        setinputvalue(e.target.value);

        //console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log('handleSubmit'); 

        if (inputvalue.trim().length > 2) {
            setCategories(cats => [ inputvalue, ...cats]); //cats => ['Pokemon', ...categories]
            setinputvalue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="Text"
                value={inputvalue}
                //onChange={ (e) => console.log(e)}
                onChange={ handleInputChange }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;