//import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'
//import { shallow } from 'enzyme';

describe('Pruebas en <useFetchGifs />',  () => {

    test ('debe retornar estado inicial', async () => {
        const category = ['Goku'];
        const {result,waitForNextUpdate } = renderHook( () => useFetchGifs(category));

        await waitForNextUpdate();
        
        const { data, loading  } = result.current;
        console.log(data, loading );

        expect ( data ).toEqual([]);
        expect ( loading ).toBe(true);

    })

    test ('debe retornar imagenes y loading false', async () => {
        const category = ['Goku'];
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs(category));

        await waitForNextUpdate();

        const { data, loading  } = result.current;



        expect ( data.length ).toEqual(10);
        expect ( loading ).toBe(false);

    })

})
