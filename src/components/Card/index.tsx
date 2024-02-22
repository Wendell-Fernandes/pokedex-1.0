import React from 'react'
import { Link } from 'react-router-dom'

import { ICard } from './types'

const Card: React.FC<ICard> = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
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
    </Link>
  )
}

export default Card
