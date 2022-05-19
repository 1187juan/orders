import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../components/layouts'
import { HomePage } from '../pages/HomePage'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/order/:order' element={<div>product</div>} />
				<Route path='/*' element={<div>error 404</div>} />
			</Routes>
		</BrowserRouter>
	)
}
