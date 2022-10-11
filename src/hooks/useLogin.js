import {auth} from "../firebase/config";
import {signInWithEmailAndPassword} from "firebase/auth"
import {useState} from "react"


export const useLogin = () => {
  const [error, setError] = useState(null)

  const login = (email, password) => {
    setError(null)
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log('user login:', res.user)
    }).catch((error) => {
      setError(error.message)
    })
  }
  return {error, login}
}
