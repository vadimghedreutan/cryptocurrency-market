import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CryptoDetails from './components/CryptoDetails'
import CryptoPage from './components/CryptoPage'
import Header from './components/Header'
import HomePage from './components/HomePage'
import NewsPage from './components/NewsPage'
import './App.less'
import Footer from './components/Footer'

function App() {
	return (
		<div>
			<Header />

			<div className="3xl:max-w-screen-2xl mx-auto w-full">
				<main className="p-5">
					<Routes>
						<Route index path="/" element={<HomePage />} />
						<Route
							path="/cryptocurrencies"
							element={<CryptoPage />}
						/>
						<Route
							path="/crypto/:coinId"
							element={<CryptoDetails />}
						/>
						<Route path="/news" element={<NewsPage />} />
					</Routes>
				</main>
			</div>

			<Footer />
		</div>
	)
}

export default App
