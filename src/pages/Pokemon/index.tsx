import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/Button/index.tsx'
import Watermark from '../../components/Watermark'
import helpers from '../../helpers/index.ts'
import Default from '../../layouts/Default'
import usePokemon from './logic.ts'

const Pokemon: React.FC = () => {
	const { pokemon, id } = usePokemon()

	return (
		<Default>
			<div className="relative flex h-screen w-[70%] items-end justify-center overflow-visible pb-[2%]">
				<div className="absolute right-0 top-10 z-20">
					<Button
						text="Home"
						path="/"
					/>
				</div>
				<div className="absolute top-0 z-10 grid w-full grid-cols-3 items-center justify-center text-2xl">
					<p className="justify-self-end text-6xl">
						{helpers.captalizeFirstLetter(pokemon?.name || 'Pokemon...')}
					</p>
					<img
						src={pokemon && pokemon.sprites.other['official-artwork'].front_default}
						alt=""
						className="size-80 justify-self-center"
					/>
					<p className="text-5xl">{`Nº ${pokemon ? helpers.addZeroLeft(pokemon.id) : '000'}`}</p>
				</div>

				<div className="relative grid h-[70%] w-full grid-cols-2 grid-rows-3 gap-x-20 gap-y-8 border-4 border-white px-9 pb-6 pt-10">
					<div className="absolute left-[50%] top-[50%] flex w-[130%] translate-x-[-50%] translate-y-[-50%] justify-between">
						<Link to={id && id == '1' ? '/' : `/pokemon/${id && parseInt(id) - 1}`}>
							<img
								src="images/arrow.png"
								alt=""
								className="size-20 rotate-180"
							/>
						</Link>
						<Link to={id == '151' ? '/' : `/pokemon/${id && parseInt(id) + 1}`}>
							<img
								src="images/arrow.png"
								alt=""
								className="size-20 "
							/>
						</Link>
					</div>
					<Watermark />
					<div className="cyan z-10 row-span-2 grid grid-cols-2 items-center justify-center rounded-2xl bg-white/70 p-5 text-black backdrop-blur-sm">
						<div className="">
							<p>Weight</p>
							<span>{`${helpers.decimetersToMeters(pokemon?.weight)} kg`}</span>
						</div>
						<div>
							<p>Height</p>
							<span>{`${helpers.decimetersToMeters(pokemon?.height)} m`}</span>
						</div>
						<div className="">
							<p>Base exp</p>
							<span>{pokemon?.base_experience}</span>
						</div>
						<div className="">
							<p>Habitat</p>
							<span>{helpers.captalizeFirstLetter(pokemon?.habitat?.name)}</span>
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

					<div className="white z-10 flex items-center justify-center overflow-hidden border-b-4 border-white text-[26px] font-medium">
						<p>
							{pokemon &&
								helpers.formattingText(
									//@ts-ignore
									pokemon.flavor_text_entries.find((e) => e.language.name == 'en').flavor_text,
								)}
						</p>
					</div>

					<div className="z-10 row-span-2 flex flex-col items-center justify-center gap-4 rounded-2xl bg-white/70 text-xl backdrop-blur-sm">
						{pokemon?.stats.map((e) => (
							<div
								key={e?.stat?.name}
								className="flex items-center justify-center gap-3 text-black"
							>
								<img
									src={`images/${e?.stat?.name}.png`}
									alt=""
									className="size-7"
								/>
								<div className="flex flex-col gap-[2px]">
									<p>{`${helpers.captalizeFirstLetter(e.stat.name)}: ${e.base_stat}`}</p>
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

					<div className="cyan z-10 flex w-full flex-col items-start justify-center gap-5 overflow-hidden rounded-2xl bg-white/70 p-5 text-black backdrop-blur-sm">
						<div className="flex items-center justify-center gap-3">
							<p>Type:</p>
							<div className="flex gap-1">
								{pokemon?.types.map((e) => (
									<span
										key={e.type.name}
										style={{ background: helpers.switchColor(e.type.name) }}
										className="flex w-28 items-center justify-center rounded-lg px-4 py-1 text-white"
									>
										{helpers.captalizeFirstLetter(e.type.name)}
									</span>
								))}
							</div>
						</div>

						<div className="flex items-center justify-center gap-3 ">
							<p>Abilities:</p>
							<div className="flex gap-1 overflow-x-auto">
								{pokemon?.abilities.map((e) => (
									<span
										key={e.ability.name}
										className="flex items-center justify-center rounded-lg bg-gray-300
										px-4 py-1"
									>
										{helpers.captalizeFirstLetter(e.ability.name)}
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
