import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import { ICard, IPokemon } from './types'

interface offset {
  e: {
    target: {
      offsetParent: HTMLDivElement
    }
  }
}

const Card: React.FC<ICard> = ({ data }) => {
  const [pokemon, setPokemon] = useState<IPokemon | null>(null)

  const getPokemon = async () => {
    const response = await api.get(data.url)
    setPokemon(response.data)
  }

  useEffect(() => {
    getPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (pokemon == null || undefined) return <></>

  return (
    <div className="animation relative size-40 cursor-pointer">
      <p className="invisible absolute bottom-[-23%] left-[50%] z-10 w-60 translate-x-[-50%] border-4 border-white bg-gray-400/20 text-center text-white">
        {`N. ${pokemon.id.toString().padStart(3, '0')} ${pokemon.name}`}
      </p>
      <img
        src={pokemon.sprites.front_default}
        alt=""
        onMouseOver={(e) => {
          //@ts-ignore
          const p = e.target.offsetParent.firstChild
          p.classList.add('visivel')
        }}
        onMouseOut={(e) => {
          //@ts-ignore
          const p = e.target.offsetParent.firstChild
          p.classList.remove('visivel')
        }}
        className="size-40 hover:bg-gray-400/20"
      />
    </div>
  )
}

export default Card
