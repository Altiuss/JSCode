export const register_req = (data) => {
    fetch("http://localhost:2000/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
                
};