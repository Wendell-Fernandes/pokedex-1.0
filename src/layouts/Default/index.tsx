import React, { ReactNode } from 'react'

const Default: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="absolute flex h-screen w-screen items-center justify-center bg-gradient-to-t from-[#a8e9ff] to-[#82E1FF] text-2xl font-normal text-white">
			{children}
		</div>
	)
}

export default Default
