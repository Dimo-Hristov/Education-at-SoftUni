import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

export const CharacterDetails = () => {
    const baseUrl = 'https://swapi.dev/api/people';
    const { characterId } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/${characterId}/`)
            .then(res => res.json())
            .then(data => setCharacter(data))
    }, [characterId]);

    const onBackButtonClick = () => {
        // use -1 to go in the previous page
        navigate('/characters')
    }

    return (
        <>
            <h1>Character page</h1>

            <h2>Name: {character.name}</h2>
            <p>Eye color: {character.eye_color}</p>
            <hr />
            <button onClick={onBackButtonClick}>Back</button>
        </>
    );
};