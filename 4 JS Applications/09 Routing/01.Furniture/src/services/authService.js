const baseUrl = "http://localhost:3030/users";

// accessToken: "53d36db4a82235324905444016df06361666aca3cf8c3253bae36a47cad30e8a";
// email: "peter@abv.bg";
// username: "Peter";
// _id: "35c62d76-8152-4626-8712-eeb96381bea8";

const save = (user) => {
    if (user) {
        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("email", user.email);
        localStorage.setItem("username", user.username);
        localStorage.setItem("_id", user._id);
    }
};

export const login = (email, password) => {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then((res) => res.json())
        .then((user) => {
            save(user);
            return user
        })
        .catch(error => alert(error.message))
};

export const isAuthenticated = () => {
    const accesToken = localStorage.getItem('accessToken');

    return Boolean(accesToken)
}
