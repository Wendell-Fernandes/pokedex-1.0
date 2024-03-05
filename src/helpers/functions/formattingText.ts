const formattingText = (text: string) => {
	console.log(text)
	return text
		.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, ' ')
		.toLocaleLowerCase()
		.split('.')
		.map((e) => e.trim().charAt(0).toUpperCase() + e.trim().slice(1))
		.join('. ')
}

export default formattingText
