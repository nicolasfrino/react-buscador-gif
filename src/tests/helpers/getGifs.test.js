import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en <getGifs />',  () => {
   
    test ('debe traer 10 elementos', async () => {

        const gifs = await getGifs('Goku');
        expect ( gifs.length ).toBe( 10 );

    })

    test ('no recibo categoria', async () => {

        const gifs = await getGifs('');
        expect ( gifs.length ).toBe( 0 );

    })

})
