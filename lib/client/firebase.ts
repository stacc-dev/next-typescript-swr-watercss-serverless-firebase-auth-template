import firebase, { auth } from 'firebase/app'
import 'firebase/auth'

if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) throw new Error('NEXT_PUBLIC_FIREBASE_API_KEY environment variable not provided')
if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) throw new Error('NEXT_PUBLIC_FIREBASE_PROJECT_ID environment variable not provided')
if (!process.env.NEXT_PUBLIC_FIREBASE_APP_ID) throw new Error('NEXT_PUBLIC_FIREBASE_APP_ID environment variable not provided')

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
    projectId: process.env.NEXT_PUBLIC_IREBASE_PROJECT_ID,
    storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  })
}

export default firebase

export const authProviders = {
  github: new firebase.auth.GithubAuthProvider()
}
authProviders.github.setCustomParameters({ prompt: 'select_account' })