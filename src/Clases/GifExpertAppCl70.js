import React, {useState} from 'react';

const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setcategories] = useState(['One Punch','Samurai X','Dragon Ball']);

    const handleAdd = () => {
        /*aca no funciona si no traigo nuevamente todo el array de cat y agrego el nuevo sino
         lo muto al ultimo elemento nada mas*/
        //setcategories (categories.push('Pokemon') );
        //categories.push('Pokemon');
        //setcategories('Pokemon');
        //setcategories([...categories, 'Pokemon']); //agrego al final
        //setcategories(['Pokemon', ...categories]); //agrego al pricipio
        setcategories(cats => ['Pokemon', ...categories]); //agrego recorriendo
        //console.log(categories);
    };

    //console.log(categories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map((categoria) => {
                        return <li key={categoria}>{categoria}</li>
                    })
                }
            </ol>


        </>
    );
}


export default GifExpertApp;