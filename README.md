# Next.js TypeScript SWR Water.css Serverless Firebase Auth Template

A template for a serverless Next.js site built with TypeScript, styled with Water.css, fetching data with SWR, and authenticating users with Firebase Auth and GitHub.

Yes. Many technologies. But the end result is a super flexible app structure that's fast and easy to work with.

The code is clean and easy to read, understand, and modify unlike many other templates. And we're nice enough to offer advice and fix things if you open an issue.

## Prerequisites

- Node 12+
- Yarn (comes with most Node installations)
- A Firebase project (create one [here](https://console.firebase.google.com/))
- A GitHub app linked to the Firebase project (for authentication)

## Quick Start

```
git clone https://github.com/stacc-dev/next-typescript-swr-watercss-serverless-firebase-auth-template.git template
cd template/
yarn
```

Create a file called `.env` with the following environment variables:

- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: The id of your project in Firebase
- `NEXT_PUBLIC_FIREBASE_APP_ID`: The id of a Firebase web app (create one in the console if needed)
- `NEXT_PUBLIC_FIREBASE_API_KEY`: The api key for the same web app
- `GCLOUD_CREDENTIALS`: A base64-encoded JSON string containing credentials to a Firebase service account (create one in the console if needed)

If you aren't familiar with `.env` files, put each environment variable on separate lines. Each line should be in the format of `VARIABLE_NAME=VARIABLE_VALUE`. Create an issue if you have any other questions!

Now just run `yarn dev` to start the development server.
