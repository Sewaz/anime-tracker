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
    <div className="flex flex-col gap-4 p-8">
      <h1 className="font-display text-3xl font-bold">Anime Tracker</h1>

      <p className="text-muted">Search for anime</p>

      <p className="flex items-center gap-2">
        Backend status:
        <span className="bg-info text-bg rounded px-2 py-0.5 text-xs font-bold">{serverStatus}</span>
      </p>

      {error && <p className="text-danger">Backend error: {error}</p>}
    </div>
  )
}

export default HomePage
