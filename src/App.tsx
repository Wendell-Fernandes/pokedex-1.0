import { SkeletonTheme } from 'react-loading-skeleton'

import Providers from './contexts'
import Routes from './routes'

const App = () => {
	return (
		<Providers>
			<Routes />
		</Providers>
	)
}

export default App
