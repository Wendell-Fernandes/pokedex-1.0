const formatting = (text: string) => {
	return text
		.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '')
		.toLocaleLowerCase()
		.split('.')
		.map((e) => e.charAt(0).toUpperCase() + e.slice(1))
		.join('. ')
}

export default formatting
