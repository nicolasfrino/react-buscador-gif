import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


export const GifExpertApp = ( {defaultCategories = []}) => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(defaultCategories );


    return (
        <>
            <h2>Buscador de gif </h2>
            <hr/>

            <AddCategory setCategories={ setCategories }/>

            <ol>
                {
                    categories.map((category) => (
                        //<li key={categoria}>{categoria}</li>
                            <GifGrid 
                                key={category} category={category}
                            />
                         )
                    )
                }
            </ol>


        </>
    );
}


export default GifExpertApp;