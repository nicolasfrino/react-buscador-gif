export const getGifs = async( category ) => {

    //const url = "https://api.giphy.com/v1/gifs/search?limit=10&q=Rick&api_key=nMgNpR5olh7WwLadlzTB8Q5eVAT2VFyN";
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI (category)}&api_key=nMgNpR5olh7WwLadlzTB8Q5eVAT2VFyN`;
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifs = data.map( img => {
           return   {
                        id: img.id,
                        title: img.title,
                        url: img.images?.downsized_medium.url
            }

        }
    )

    //console.log(data);
    return ( gifs );

}   
