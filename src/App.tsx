import React from 'react'
import useSWR from 'swr'

function App() {
  const { data, error } = useSWR(
    'https://api.github.com/repos/vercel/swr',
    () => ({
      name: 'swr',
      description: 'React Hooks library for remote data fetching',
      subscribers_count: 192,
      stargazers_count: 15353,
      forks_count: 515
    })
  )

  if (error) return <>{'An error has occurred.'}</>
  if (!data) return <>{'Loading...'}</>
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👀 {data.subscribers_count}</strong>{' '}
        <strong>✨ {data.stargazers_count}</strong>{' '}
        <strong>🍴 {data.forks_count}</strong>
      </div>
    </div>
  )
}

export default App
