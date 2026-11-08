import { useParams } from 'react-router-dom'

function AnimePage() {
  const { id } = useParams()

  return (
    <div>
      <h1>Anime Details</h1>
      <p>Anime ID: {id}</p>
    </div>
  )
}

export default AnimePage
