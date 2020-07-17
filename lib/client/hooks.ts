import useSWR from 'swr'
import { User } from 'firebase'
import Router from 'next/router'
import { useEffect } from 'react'

export const useRequireUser = (user: User | null, loading: boolean, redirect: string = '/') => {
  useEffect(() => {
    if (!loading && !user) Router.replace(redirect)
  }, [ user, loading ])
}

export const useRequireNoUser = (user: User | null, loading: boolean, redirect: string = '/') => {
  useEffect(() => {
    if (!loading && user) Router.replace(redirect)
  }, [ user, loading ])
}

export const authedDataFetcher = async (endpoint: string, user: User | null) => {
  if (!user) return null
  const idToken = await user.getIdToken()

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ idToken })
  })
  const text = await res.text()

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${text}`)
  }

  try {
    return JSON.parse(text)
  } catch {
    throw new Error(`Error parsing JSON: ${text}`)
  }
}

export const useAuthedData = <Type>(endpoint: string, user: User | null) => {
  return useSWR<Type>([ endpoint, user ], authedDataFetcher)
}