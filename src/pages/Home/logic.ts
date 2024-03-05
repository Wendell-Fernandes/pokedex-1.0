import { useState } from 'react'

import { usePokemons } from '../../contexts/Pokemons'

const useHome = () => {
	const { pokemons } = usePokemons()
	const [search, setSearch] = useState<string>('')
	const filter = search.length ? pokemons.filter((e) => e.name.includes(search.toLowerCase().trim())) : []

	return { pokemons, search, setSearch, filter }
}

export default useHome
