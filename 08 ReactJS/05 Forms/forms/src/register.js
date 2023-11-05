

function Register() {

    return (
        <form>
            <label htmlFor="email"></label>
            <input type="text" htmlFor="email" name="email" />

            <label htmlFor="password"></label>
            <input type="password" htmlFor="password" name="password" />

            <label htmlFor="age"></label>
            <input type="number" htmlFor="age" name="age" />

            <label htmlFor="city"></label>
            <input type="text" htmlFor="city" name="city" />

            <input type="submit" value="Submit" />

        </form>
    );
}

export default Register;