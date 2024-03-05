import { ReactNode } from 'react'

export interface IPokemon {
	name: string
	sprites: {
		other: {
			'official-artwork': {
				front_default: string
			}
		}
	}
	species: {
		url: string
	}
	id: string
	height: number
	weight: number
	base_experience: number
	abilities: IAbilities[]
	types: IType[]
	flavor_text_entries: IFlavor[]
	egg_groups: IEgg[]
	stats: IStats[]
	habitat: {
		name: string
	}
	order: number
}

interface IAbilities {
	ability: {
		name: string
	}
}

interface IType {
	type: {
		name: string
	}
}

interface IFlavor {
	flavor_text: string
	language: {
		name: string
	}
}

interface IEgg {
	name: string
}

interface IStats {
	base_stat: number
	stat: {
		name: string
	}
}
