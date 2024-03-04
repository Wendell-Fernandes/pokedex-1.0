const switchColor = (type: string) => {
	type.toLowerCase().trim()
	switch (type) {
		case 'normal':
			return '#a4acaf'
		case 'fire':
			return '#fd7d24'
		case 'water':
			return '#4592c4'
		case 'grass':
			return '#9bcc50'
		case 'electric':
			return '#eed535'
		case 'ice':
			return '#51c4e7'
		case 'fighting':
			return '#d56723'
		case 'poison':
			return '#b97fc9'
		case 'ground':
			return 'linear-gradient(0deg, rgba(171,152,66,1) 50%, rgba(238,213,53,1) 50%)'
		case 'flying':
			return 'linear-gradient(0deg, rgba(189,185,184,1) 50%, rgba(61,199,239,1) 50%)'
		case 'Psychic':
			return '#f366b9'
		case 'bug':
			return '#729f3f'
		case 'rock':
			return '#a38c21'
		case 'ghost':
			return '#7b62a3'
		case 'dragon':
			return 'linear-gradient(0deg, rgba(241,110,87,1) 50%, rgba(83,164,207,1) 50%)'
		case 'dark':
			return '#705848'
		case 'steel':
			return '#9eb7b8'
		case 'fairy':
			return '#fdb9e9'
		default:
			break
	}
}

export default switchColor
