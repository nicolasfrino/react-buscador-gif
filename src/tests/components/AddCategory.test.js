import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    //const setcategories = () => {};
    let wrapper =  shallow ( <AddCategory setCategories= { setCategories }  /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper =  shallow ( <AddCategory setCategories= { setCategories }  /> );
    } )

    test ('debe mostrarse OK', () => {
        expect( wrapper ).toMatchSnapshot();

    })

    test ('debe cambiar la caja', () => {

        const input = wrapper.find('input');
        const valor = 'Hola Mundo';
        input.simulate('change', {target: {value: valor }});
        expect (wrapper.find('p').text().trim()).toBe(valor)

    })

    test ('No debe postear OnSubmit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect ( setCategories ).not.toHaveBeenCalled();

    }) 

    test ('debe de llamar el setCategories y limpiar la caja de texto', () => {

        //simular inputchange

        const valor = 'Hola Mundo';
        wrapper.find('input').simulate('change', {target: {value: valor }});

        //simular submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        //deben haber llamado a setcategories
        expect ( setCategories ).toHaveBeenCalled();
        expect ( setCategories ).toHaveBeenCalledTimes(1);
        expect ( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        //el value del input debe estar vacio
        expect ( wrapper.find('input').props().value ).toBe('');
    }) 

})
