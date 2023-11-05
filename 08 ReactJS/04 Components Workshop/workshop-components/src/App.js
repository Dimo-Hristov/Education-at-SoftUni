import './App.css'
import * as userService from './services/userService';
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from "./components/footer";
import Search from "./components/Search";
import UserList from './components/UserList';



function App() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll()
            .then(setUsers)
            .catch(err => console.log(err.message))
    }, []);

    const createUserHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = Object.fromEntries(formData)

        try {
            const user = await userService.createUser(data);
            setUsers((state) => [...state, user])
            //  i want to modily the setFormClick state from here
        } catch (error) {
            console.log(error.message);
        }


    }

    const onUserDelete = async (userId) => {
        await userService.removeUser(userId);

        setUsers(state => state.filter(x => x._id !== userId))
    }


    return (
        <>
            <Header />

            <main className="main">

                <section className="card users-container>">
                    <Search />
                    <UserList
                        users={users}
                        createUserHandler={createUserHandler}
                        onUserDelete={onUserDelete}
                    />

                </section>

            </main>

            <Footer />
        </>
    );
}

export default App;
