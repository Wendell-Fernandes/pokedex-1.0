import React from 'react'

const Watermark: React.FC = () => {
	return (
		<img
			src="images/pokeball.png"
			alt=""
			className="absolute left-[50%] top-[50%] size-96 translate-x-[-50%] translate-y-[-50%] scale-125 opacity-30"
		/>
	)
}

export default Watermark
