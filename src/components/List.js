import { useEffect, useState } from 'react';
import Character from './Character';

function List() {
    /* Set the loading state to true */
    const [loading, setLoading] = useState(true);
    /* Prepare an array to accept data from the API */
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        /* Fetch data from the rick and morty REST api using an async function */
        async function fetchData() {
            const data = await fetch(
                'https://rickandmortyapi.com/api/character');
        /* Convert the data from the API into a JSON file and 
        store in the result object */
            const { results } = await data.json();
        /* Use the setCharacter hook to change the state of the characters variable */
            setCharacters(results);
        /* Set loading state to false after the function has finished fetching the api */
            setLoading(false);
        }

        fetchData();
    }, [characters.length]);

    return (
        <div>
            <h2>Characters</h2>
            {/* Return the character component if the fetch functionn has finished fetching
            data from the api else display 'loading...' state in the user interface */}
            <div className='row'>
                {loading ? (<div>Loading...</div>) : (
                    characters.map((character) => (
                        <Character 
                            key={character.id}
                            name={character.name}
                            origin={character.origin}
                            image={character.image}
                            />
                    ))
                )}
            </div>
        </div>
    )
}

export default List;