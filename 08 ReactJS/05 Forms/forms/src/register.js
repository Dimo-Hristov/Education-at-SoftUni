import { useState } from "react";

function Register() {

    const [age, setAge] = useState(null);
    const [creditCard, setCreaditCard] = useState();

    const onAgeChangeHandler = (e) => {
        setAge(e.target.value)
    }

    const onCreditCardChange = (e) => {
        setCreaditCard(e.target.value)
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
            <label htmlFor="email">email</label>
            <input type="text" id="email" name="email" onChange={onChangeHandler} value={values.email} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={onChangeHandler} value={values.password} />

            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" onChange={onAgeChangeHandler} value={age || ''} />

            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" onChange={onChangeHandler} value={values.city} />

            {age >= 18 && (
                <div>
                    <label htmlFor="credit-card">Credit card</label>
                    <input type="number" id="credit-card" name="creditCard" onChange={onCreditCardChange} value={creditCard || ''} />
                </div>

            )}

            <input type="submit" value="Submit" />

        </form>
    );
}

export default Register;