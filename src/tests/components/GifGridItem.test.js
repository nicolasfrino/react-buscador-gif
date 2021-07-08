import React from 'react';
//const { shallow } = require("enzyme");
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

const title = 'un titulo';
const url = 'https://localhost/algo.jpg';
const wrapper =  shallow ( <GifGridItem title={title} url={url}  /> );
const p = wrapper.find('p');
   
    test ('debe mostrar compo OK', () => {
        expect ( wrapper ).toMatchSnapshot();

    })

    test ('debe tener parrafo con titulo', () => {
        expect ( p.text().trim() ).toBe( title );

    })

    test ('debe tener imagen con url y alt', () => {
        const img = wrapper.find('img');
        //console.log(img.props().src ); 
        //console.log(img.prop('src') ); 
        expect (img.prop('src')).toBe(url);
        expect (img.prop('alt')).toBe(title);

    })

    test ('debe tener clse', () => {
        const div = wrapper.find('div');
        console.log(div.props().className ); 
        expect (div.props().className.includes('fadeIn') ).toBe(true);

    })

})
