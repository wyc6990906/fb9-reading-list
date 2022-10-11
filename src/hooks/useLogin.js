import {auth} from "../firebase/config";
import {signInWithEmailAndPassword} from "firebase/auth"
import {useState} from "react"
import {useAuthContext} from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null)
  const {dispatch} = useAuthContext()

  const login = (email, password) => {
    setError(null)
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      // console.log('user login:', res.user)
      dispatch({
        type: 'LOGIN',
        payload: res.user
      })
    }).catch((error) => {
      setError(error.message)
    })
  }
  return {error, login}
}
