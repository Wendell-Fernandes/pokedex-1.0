import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useLoading } from '../../contexts/Loading'
import { usePokemons } from '../../contexts/Pokemons'
import api from '../../services/api'
import { IPokemon } from '../../types'

const usePokemon = () => {
	const { loading, setLoading } = useLoading()
	const { pokemons } = usePokemons()
	const { id } = useParams()
	const [pokemon, setPokemon] = useState<IPokemon>()

	const getPokemon = async () => {
		setLoading(true)
		const poke = pokemons.find((e) => e.id == id)
		try {
			if (poke) {
				const response = await api.get(poke.species.url)
				const info = Object.assign(response.data, poke)
				setPokemon(info)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		if (pokemons.length) {
			getPokemon()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pokemons, id])

	return { pokemon, id, loading }
}

export default usePokemon
