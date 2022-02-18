import {useSelector} from 'react-redux';

export function useAuth() {
    const {email, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyCsOfpLpLnBaiK0lrwgcCU4GhfgPSo1nW0'
    return fetch (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
           returnSecureToken: true 
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.idToken)
}