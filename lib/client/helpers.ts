import firebase from 'lib/client/firebase'

export const loginWith = (provider: firebase.auth.AuthProvider) => async () => {
  const { user } = await firebase.auth().signInWithPopup(provider)
  return user
}

export const logout = () => firebase.auth().signOut()