import { useEffect, useState } from 'react'

type HealthResponse = {
  status: string
}

function HomePage() {
  const [serverStatus, setServerStatus] = useState('Waiting...')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function checkServerStatus() {
      try {
        const response = await fetch('/api/health')

        if (!response.ok) {
          throw new Error('HTTP error: ' + response.status)
        }

        const data: HealthResponse = await response.json()

        setServerStatus(data.status)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Unknow error')
      }
    }

    checkServerStatus()
  }, [])

  return (
    <div>
      <h1>Anime Tracker</h1>

      <p>Search for anime</p>

      <p>Backend status: {serverStatus}</p>

      {error && <p>Backend error: {error}</p>}
    </div>
  )
}

export default HomePage
