import { authActions } from "../features/authSlice";

export const loginUser = (user) => {
    return async (dispatch) => {
        try {
            const res = await fetch('https://blog-api-lpv7.onrender.com/api/auth/login', {
              method: 'POST',
              body: JSON.stringify(user),
              headers: {
                'Content-Type': 'application/json',
              },
            })
            const data = await res.json()
            console.log('DATA',data);
            dispatch(authActions.login(data))
        } catch (error) {
            console.log(error);
        }
    }
}