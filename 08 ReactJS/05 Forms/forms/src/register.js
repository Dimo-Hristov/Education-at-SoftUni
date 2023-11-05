import { useState } from "react";

function Register() {

    const [age, setAge] = useState(null);

    const onAgeChangeHandler = (e) => {
        setAge(e.target.value)
    }

    const [values, setValues] = useState({
        email: 'Pesho',
        password: '123',
        city: 'Sofia'
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))

    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" onChange={onChangeHandler} value={values.email} />

            <label htmlFor="password"></label>
            <input type="password" id="password" name="password" onChange={onChangeHandler} value={values.password} />

            <label htmlFor="age"></label>
            <input type="number" id="age" name="age" onChange={onAgeChangeHandler} value={age || ''} />

            <label htmlFor="city"></label>
            <input type="text" id="city" name="city" onChange={onChangeHandler} value={values.city} />

            <input type="submit" value="Submit" />

        </form>
    );
}

export default Register;