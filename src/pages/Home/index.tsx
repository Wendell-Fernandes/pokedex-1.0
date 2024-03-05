import React, { useState } from 'react'

import Card from '../../components/Card'
import Watermark from '../../components/Watermark'
import { usePokemons } from '../../contexts/Pokemons'
import Default from '../../layouts/Default'
import useHome from './logic'

const Home: React.FC = () => {
	const { pokemons, search, setSearch, filter } = useHome()

	return (
		<Default>
			<div className="flex h-screen w-[70%] flex-col justify-center gap-12">
				<div className="flex items-center justify-between">
					<input
						type="text"
						placeholder="Search..."
						value={search}
						onChange={(e) => {
							setSearch(e.target.value)
						}}
						className="h-12 w-72 border-4 border-white bg-white/10 pl-4 font-medium no-underline decoration-transparent shadow-none outline-none placeholder:text-white placeholder:text-white/90 backdrop:blur-xl"
					/>
					<input
						type="text"
						placeholder={`Pokemons found: ${search.length ? filter.length : pokemons.length}`}
						disabled
						className="h-12 w-72 border-4 border-white bg-white/15 text-center font-medium no-underline decoration-transparent shadow-none outline-none placeholder:text-white backdrop:blur-xl"
					/>
				</div>
				<div className="relative flex h-[75%] w-full items-center justify-center border-4 border-white">
					<Watermark />
					<div className="scroll grid h-full w-full grid-cols-6 content-start items-center justify-center  gap-10 overflow-x-hidden overflow-y-scroll px-12 py-10">
						{search.length ?
							filter.map((e) => (
								<Card
									pokemon={e}
									key={e.id}
								/>
							))
						:	pokemons.map((e) => (
								<Card
									pokemon={e}
									key={e.id}
								/>
							))
						}
					</div>
				</div>
			</div>
		</Default>
	)
}

export default Home
