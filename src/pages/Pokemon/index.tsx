import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Watermark from '../../components/Watermark'
import { usePokemons } from '../../contexts/Pokemons'
import functions from '../../helpers'
import Default from '../../layouts/Default'
import api from '../../services/api'
import { IPokemon } from '../../types'

const Pokemon: React.FC = () => {
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
	}, [pokemons])

	return (
		<Default>
			<div className="relative flex h-screen w-[70%] items-end justify-center overflow-hidden pb-[2%]">
				<div className="absolute top-0 z-10 grid w-full grid-cols-3 items-center justify-center text-2xl">
					<p className="justify-self-end text-6xl">
						{functions.captalizeFirstLetter(pokemon?.name || 'Pokemon...')}
					</p>
					<img
						src={pokemon ? pokemon.sprites.other['official-artwork'].front_default : ''}
						alt=""
						className="size-80 justify-self-center"
					/>
					<p className="text-5xl">{`Nº ${pokemon ? functions.addZeroLeft(pokemon.id) : '000'}`}</p>
				</div>

				<div className="relative grid h-[70%] w-full grid-cols-2 grid-rows-3 gap-x-20 gap-y-8 border-4 border-white px-9 pb-6 pt-10">
					<Watermark />
					<div className="cyan z-10 row-span-2 grid grid-cols-2 items-center justify-center rounded-2xl bg-white/80 p-5 text-black">
						<div className="">
							<p>Weight</p>
							<span>{`${functions.decimetersToMeters(pokemon?.weight)} kg`}</span>
						</div>
						<div>
							<p>Height</p>
							<span>{`${functions.decimetersToMeters(pokemon?.height)} m`}</span>
						</div>
						<div className="">
							<p>Base exp</p>
							<span>{pokemon?.base_experience}</span>
						</div>
						<div className="">
							<p>Habitat</p>
							<span>{functions.captalizeFirstLetter(pokemon?.habitat.name)}</span>
						</div>
						<div className="">
							<p>Order</p>
							<span>{pokemon?.order}</span>
						</div>
						<div>
							<p>Gender</p>
							<div className="flex">
								<img
									src="images/male.png"
									alt=""
									className="size-[30px]"
								/>
								<img
									src="images/female.png"
									alt=""
									className="size-8"
								/>
							</div>
						</div>
					</div>

					<div className="white z-10 flex items-center justify-center overflow-hidden border-b-4 border-white text-[26px]">
						<p>{pokemon ? functions.formatting(pokemon.flavor_text_entries[0].flavor_text) : ''}</p>
					</div>

					<div className="z-10 row-span-2 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white/80 text-xl">
						{pokemon?.stats.map((e) => (
							<div
								key={e.stat.name}
								className="flex items-center justify-center gap-3 text-black"
							>
								<img
									src={`images/${e.stat.name}.png`}
									alt=""
									className="size-7"
								/>
								<div className="flex flex-col gap-[2px]">
									<p>{`${
										e.stat.name === 'hp' ?
											e.stat.name.toUpperCase()
										:	functions.captalizeFirstLetter(e.stat.name)
									}: ${e.base_stat}`}</p>
									<div className={`h-3 w-[250px] overflow-hidden bg-gray-300`}>
										<div
											style={{ width: `${e.base_stat * 1.25}px` }}
											className="h-full bg-[#5EBBBB]"
										/>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="cyan z-10 flex flex-col items-start justify-center gap-5 overflow-hidden rounded-2xl bg-white/80 p-5 text-black">
						<div className="flex w-[50%] gap-3">
							<p>Type:</p>
							<div className="flex gap-1">
								{pokemon?.types.map((e) => (
									<span
										key={e.type.name}
										style={{ background: functions.switchColor(e.type.name) }}
										className="h-min w-28 rounded-lg px-4 py-1 text-center text-white"
									>
										{functions.captalizeFirstLetter(e.type.name)}
									</span>
								))}
							</div>
						</div>

						<div className="flex w-[50%] gap-3">
							<p>Abilities:</p>
							<div className="flex gap-1">
								{pokemon?.abilities.map((e) => (
									<span
										key={e.ability.name}
										className="h-max w-max rounded-lg bg-gray-300 px-4 py-1"
									>
										{functions.captalizeFirstLetter(e.ability.name)}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Default>
	)
}

export default Pokemon
