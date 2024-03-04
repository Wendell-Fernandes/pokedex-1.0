import captalizeFirstLetter from '../captalizeFirstLetter'

const formatting = (text: string) => {
	return text
		.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')
		.toLocaleLowerCase()
		.split('.')
		.map((e) => captalizeFirstLetter(e))
		.join('. ')
}

export default formatting
