import React from 'react';
import '@testing-library/jest-dom'
import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en <GifExpertApp />',  () => {
   
    test ('GifExpertApp',  () => {

        const wrapper =  shallow ( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    })

    test ('debe mostar lista de categorias',  () => {

        const categories = ['Goku','Vegeta'];

        const wrapper =  shallow ( <GifExpertApp defaultCategories={categories}/> );
        expect( wrapper ).toMatchSnapshot();
        expect (wrapper.find('GifGrid').length).toBe( categories.length);
    })

})
