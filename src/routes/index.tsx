import { useRoutes } from 'react-router-dom'

import Home from '../pages/Home'
import Pokemon from '../pages/Pokemon'

const Routes = () => {
	const element = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/pokemon/:id',
			element: <Pokemon />,
		},
	])

	return element
}

export default Routes
