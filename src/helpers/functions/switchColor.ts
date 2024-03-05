const switchColor = (type: string) => {
	type.toLowerCase().trim()
	switch (type) {
		case 'normal':
			return '#a9a979'
		case 'fire':
			return '#f0812c'
		case 'water':
			return '#6891f0'
		case 'grass':
			return '#79c94f'
		case 'electric':
			return '#f8d12c'
		case 'ice':
			return '#99d9d9'
		case 'fighting':
			return '#c12c23'
		case 'poison':
			return '#a13ea1'
		case 'ground':
			return '#e1c168'
		case 'flying':
			return '#a991f0'
		case 'psychic':
			return '#f85789'
		case 'bug':
			return '#a9b91a'
		case 'rock':
			return '#b9a135'
		case 'ghost':
			return '#705799'
		case 'dragon':
			return '#7035f8'
		case 'dark':
			return '#705746'
		case 'steel':
			return '#b9b9d1'
		case 'fairy':
			return '#ef9aae'
		default:
			break
	}
}

export default switchColor
