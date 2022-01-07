import React from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'
import { useGetCryptoQuery } from '../services/cryptoApi'
import CardLayout from './UI/CardLayout'
import CryptoPage from './CryptoPage'
import NewsPage from './NewsPage'

function HomePage() {
	const { data, isFetching } = useGetCryptoQuery(10)
	const globalStats = data?.data?.stats

	if (isFetching) return 'Loading...'

	return (
		<div className="flex flex-col space-y-4">
			<div className="lg:w-1/3">
				<h1 className="font-bold font-poppins text-base sm:text-2xl mb-4">
					Global Crypto Stats
				</h1>
				<CardLayout>
					<ul className="space-y-4">
						<li className="flex justify-between items-center">
							<p className="text-gray-300">
								Total Cryptocurrencies:
							</p>
							<span className="text-xs bg-gray-900 py-1 px-2 rounded-xl text-white ml-2">
								{millify(globalStats.total)}
							</span>
						</li>
						<li className="flex justify-between items-center">
							<p className="text-gray-300">Total Exchanges:</p>
							<span className="text-xs bg-gray-900 py-1 px-2 rounded-xl text-white ml-2">
								{millify(globalStats.totalExchanges)}
							</span>
						</li>
						<li className="flex justify-between items-center">
							<p className="text-gray-300">Total Market Cap:</p>
							<span className="text-xs bg-gray-900 py-1 px-2 rounded-xl text-white ml-2">
								{millify(globalStats.totalMarketCap)}
							</span>
						</li>
						<li className="flex justify-between items-center">
							<p className="text-gray-300">Total 24h Volume:</p>
							<span className="text-xs bg-gray-900 py-1 px-2 rounded-xl text-white ml-2">
								{millify(globalStats.total24hVolume)}
							</span>
						</li>
						<li className="flex justify-between items-center">
							<p className="text-gray-300">Total Markets:</p>
							<span className="text-xs bg-gray-900 py-1 px-2 rounded-xl text-white ml-2">
								{millify(globalStats.totalMarkets)}
							</span>
						</li>
					</ul>
				</CardLayout>
			</div>
			<div>
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer">
					<h1 className="font-bold font-poppins text-base sm:text-2xl mt-6 sm:mb-4 ">
						Top 10 cryptocurrencies in the world
					</h1>
					<Link to="/cryptocurrencies" className="mb-4 sm:mb-0">
						Show more...
					</Link>
				</div>
				<CryptoPage simplified />
			</div>
			<div>
				<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer">
					<h1 className="font-bold font-poppins text-base sm:text-2xl mt-6 sm:mb-4 ">
						Latest Cryptos News
					</h1>
					<Link to="/news" className="mb-4 sm:mb-0">
						Show more...
					</Link>
				</div>
				<NewsPage simplified />
			</div>
		</div>
	)
}

export default HomePage
