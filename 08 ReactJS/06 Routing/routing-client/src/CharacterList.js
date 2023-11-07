import { useEffect, useState } from 'react';
import { Character } from './Character';

export const CharacterList = () => {
    const [characterList, setCharacterList] = useState([]);
    const url = 'https://swapi.dev/api/people'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCharacterList(data.results);
            });
    }, [])

    return (
        <>
            <h1>Characters list</h1>

            <ul>
                {characterList.map(x => <div><Character key={x.url} {...x} /></div>)}
            </ul>
        </>
    );
};