import { Dispatch, SetStateAction } from 'react'

import { IPokemon } from '../../types'

export interface IPokemonsProvider {
	pokemons: IPokemon[]
	setPokemons: Dispatch<SetStateAction<IPokemon[]>>
}
