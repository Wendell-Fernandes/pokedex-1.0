import React from 'react'
import { useParams } from 'react-router-dom'

const Pokemon: React.FC = () => {
  const { id } = useParams()

  return <p>{id}</p>
}

export default Pokemon
