import { Dispatch, SetStateAction } from 'react'

import { IPokemons } from '../../types'

export interface IPokemonsProvider {
  pokemons: IPokemons[]
  setPokemons: Dispatch<SetStateAction<IPokemons[]>>
}
