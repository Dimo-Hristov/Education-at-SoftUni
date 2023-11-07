import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

export const CharacterDetails = () => {
    const baseUrl = 'https://swapi.dev/api/people';
    const { characterId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`${baseUrl}/${characterId}/`)
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, [characterId])

    return (
        <>
            <h1>Character page</h1>

            <h2>Name: {character.name}</h2>
            <p>Eye color: {character.eye_color}</p>
        </>
    );
};