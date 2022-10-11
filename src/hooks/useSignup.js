import {useState} from "react"
import {auth} from "../firebase/config";
import {createUserWithEmailAndPassword} from "firebase/auth"

export const useSignup = () => {
  const [error, setError] = useState(null)

  const signUp = (email, password) => {
    setError(null)
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      console.log('user signup :', res.user)
    }).catch((err) => {
      setError(err.message)
    })

  }

  return {error, signUp}
}
