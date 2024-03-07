import { ReactNode, createContext, useContext, useState } from 'react'

import { ILoading } from './types'

const Loading = createContext({} as ILoading)

const LoadingProvider = ({ children }: { children: ReactNode }) => {
	const [loading, setLoading] = useState<boolean>(false)
	return <Loading.Provider value={{ loading, setLoading }}>{children}</Loading.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLoading = () => useContext(Loading)

export default LoadingProvider
