import React from 'react'

import images from '../../assets/'

const Watermark: React.FC = () => {
	return (
		<img
			src={images.pokeball}
			alt=""
			className="absolute left-[50%] top-[50%] size-96 translate-x-[-50%] translate-y-[-50%] scale-125 opacity-30"
		/>
	)
}

export default Watermark
