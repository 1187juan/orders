import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../layouts'
import { HomePage, OrderDetailsPage } from '../pages'

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/order/:orderId' element={<OrderDetailsPage />} />
				<Route path='/*' element={<div>error 404</div>} />
			</Routes>
		</BrowserRouter>
	)
}
