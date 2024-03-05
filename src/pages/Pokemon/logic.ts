import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { usePokemons } from '../../contexts/Pokemons'
import api from '../../services/api'
import { IPokemon } from '../../types'

const usePokemon = () => {
	const { pokemons } = usePokemons()
	const { id } = useParams()
	const [pokemon, setPokemon] = useState<IPokemon>()

	const getPokemon = async () => {
		const poke = pokemons.find((e) => e.id == id)
		if (poke) {
			const response = await api.get(poke.species.url)
			const info = Object.assign(response.data, poke)
			setPokemon(info)
		}
	}

	useEffect(() => {
		if (pokemons.length) {
			getPokemon()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pokemons, id])

	return { pokemon, id }
}

export default usePokemon
