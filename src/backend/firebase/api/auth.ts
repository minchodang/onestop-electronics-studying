import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  NextOrObserver,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth'
import { firebaseApp } from '../config'

const auth = getAuth(firebaseApp)

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signInGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

export const signUpEmailAndPassword = async (
  displayName: string,
  email: string,
  password: string,
): Promise<User> => {
  const userInfo = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(userInfo.user, { displayName })
  return userInfo.user
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback)
