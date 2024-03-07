import { ReactNode } from 'react'

import LoadingProvider from './Loading'
import PokemonsProvider from './Pokemons'

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<LoadingProvider>
			<PokemonsProvider>{children}</PokemonsProvider>
		</LoadingProvider>
	)
}

export default Providers
