import React, {useState} from 'react';
import ProtoTypes from 'prop-types'

const AddCategory = ({setcategories}) => {

    const [inputvalue, setinputvalue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setinputvalue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit echo');

        if (inputvalue.trim().length > 2) {
            setcategories(cats => [...cats, inputvalue]); //cats => ['Pokemon', ...categories]
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
    setcategories: ProtoTypes.func.isRequired
}

export default AddCategory;