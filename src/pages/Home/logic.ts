import { useEffect, useState } from 'react'

import { useLoading } from '../../contexts/Loading'
import { usePokemons } from '../../contexts/Pokemons'

const useHome = () => {
	const { loading, setLoading } = useLoading()
	const { pokemons } = usePokemons()
	const [search, setSearch] = useState<string>('')
	const filter = search.length ? pokemons.filter((e) => e.name.includes(search.toLowerCase().trim())) : []

	return { pokemons, search, setSearch, filter, loading, setLoading }
}

export default useHome
