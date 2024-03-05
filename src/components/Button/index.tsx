import React from 'react'
import { Link } from 'react-router-dom'

const Button: React.FC<{ text: string; path: string }> = ({ text, path }) => {
	return (
		<Link
			to={path}
			className="cursor-pointer border-4 border-white px-5 py-2"
		>
			{text}
		</Link>
	)
}

export default Button
