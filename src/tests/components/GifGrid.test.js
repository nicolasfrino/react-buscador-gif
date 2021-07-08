import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const categoria = 'Goku';

    test ('debe mostrarse OK', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper =  shallow ( <GifGrid  category={categoria} /> );
        expect( wrapper ).toMatchSnapshot();

    })

    test ('debe mostrar items cuando se llama a userFetchGifts', () => {


        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiera.jpg',
            title: 'cualquiera'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });


        const wrapper =  shallow ( <GifGrid  category={categoria} /> );

        //como hacer para no comparar contra snapshot y mirar si esta el componente
        expect( wrapper ).toMatchSnapshot();

        expect (wrapper.find('p').exists()).toBe(false);

        expect (wrapper.find('GifGridItem').length).toBe( gifs.length);

    })


})
