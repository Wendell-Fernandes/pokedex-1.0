import React, { useState } from 'react'

import image from '../../assets/images/pokeball.png'
import Card from '../../components/Card'
import { usePokemons } from '../../contexts/Pokemons'

const Home: React.FC = () => {
  const { pokemons } = usePokemons()
  const [search, setSearch] = useState<string>('')
  const filter = search.length > 0 ? pokemons.filter((e) => e.name.includes(search.toLowerCase().trim())) : []

  if (pokemons.length === 0) return <p className="text-9xl font-extrabold">Carregando...</p>

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-t from-[#00676a] via-[#00bcc1] to-[#b9fdff]">
      <div className="font-arial flex h-screen w-[70%] flex-col justify-center gap-12 text-2xl font-medium">
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            className="h-12 w-72 border-4 border-white bg-gray-400/20 pl-4 text-white no-underline decoration-transparent shadow-none outline-none placeholder:text-white backdrop:blur-sm"
          />
          <input
            type="text"
            placeholder={`Pokemons found: ${search.length > 0 ? filter.length : pokemons.length}`}
            disabled
            className="h-12 w-72 border-4 border-white bg-gray-400/20 text-center text-white no-underline decoration-transparent shadow-none outline-none placeholder:text-white backdrop:blur-sm"
          />
        </div>
        <div className="relative flex h-[75%] w-full items-center justify-center border-4 border-white">
          <img src={image} alt="" className="absolute size-80 opacity-40" />
          <div className="scroll grid h-full grid-cols-7 content-start gap-x-4 gap-y-5 overflow-x-hidden overflow-y-scroll px-14 pb-10 pt-2">
            {search.length > 0
              ? filter.map((e) => <Card pokemon={e} key={e.id} />)
              : pokemons.map((e) => <Card pokemon={e} key={e.id} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
