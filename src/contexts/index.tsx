import { ReactNode } from 'react'

import PokemonsProvider from './Pokemons'

const Providers = ({ children }: { children: ReactNode }) => {
  return <PokemonsProvider>{children}</PokemonsProvider>
}

export default Providers
