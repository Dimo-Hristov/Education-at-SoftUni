import { Link } from 'react-router-dom';

export const Character = ({
    name,
    url
}) => {

    const id = url.split('/').filter(x => x).pop();

    return (
        <div>
            <Link to={`/characters/${id}`}> {name}</Link>
        </div>
    )
}