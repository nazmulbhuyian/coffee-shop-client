import React, { useEffect, useState } from 'react';

const UseToken = (email) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        fetch(`https://coffee-shop-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    setToken(data.accessToken)
                }
            })
    }, [email])
    return [token]
};

export default UseToken;