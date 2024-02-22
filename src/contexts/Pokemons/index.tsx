import axios from 'axios'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import api from '../../services/api'
import { IPokemons } from '../../types'
import { IPokemonsProvider } from './types'

const Pokemons = createContext({} as IPokemonsProvider)

const PokemonsProvider = ({ children }: { children: ReactNode }) => {
  const endpoints: string[] = []
  const [pokemons, setPokemons] = useState<IPokemons[]>([])

  const getPokemons = async (endpoints: string[]) => {
    const response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    response.map((e) => setPokemons((prev) => [...prev, e.data]))
  }

  const getEndpoints = async () => {
    const response = await api.get('/pokemon?limit=151&offset=0')
    response.data.results.map((e: { url: string }) => endpoints.push(e.url))
    getPokemons(endpoints)
  }

  useEffect(() => {
    getEndpoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Pokemons.Provider value={{ pokemons, setPokemons }}>{children}</Pokemons.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePokemons = () => useContext(Pokemons)

export default PokemonsProvider
