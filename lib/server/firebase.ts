import firebase from 'firebase-admin'

if (!process.env.GCLOUD_CREDENTIALS) throw new Error('GCLOUD_CREDENTIALS environment variable not provided')
if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) throw new Error('NEXT_PUBLIC_FIREBASE_PROJECT_ID environment variable not provided')

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    credential: firebase.credential.cert(JSON.parse(
      Buffer.from(process.env.GCLOUD_CREDENTIALS as string, 'base64').toString()
    )),
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
  })
}

export default firebase