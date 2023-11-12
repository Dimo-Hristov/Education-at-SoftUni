import { useState } from 'react';
import * as gameService from '../../services/gameService';

export const CreatePage = () => {

    const [data, setData] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    const onChange = (e) => {
        const elementName = e.target.name
        setData((state) => ({ ...state, [elementName]: e.target.value }))
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await gameService.createGame(data);
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit} >
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                        value={data.title}
                        onChange={onChange}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                        value={data.category}
                        onChange={onChange}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                        value={data.maxLevel}
                        onChange={onChange}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                        value={data.imageUrl}
                        onChange={onChange}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={data.summary} onChange={onChange} />
                    <input className="btn submit" type="submit" defaultValue="Create Game" />
                </div>
            </form>
        </section>

    )
}