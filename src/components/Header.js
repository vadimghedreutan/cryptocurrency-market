import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegNewspaper, FaCoins, FaGlobeEurope } from 'react-icons/fa'

function Header() {
	return (
		<div className="bg-gray-800 shadow-sm sticky inset-0 z-30">
			<div className="flex justify-between items-center p-5 3xl:max-w-screen-2xl mx-auto w-full">
				<Link
					to="/"
					className="flex items-center font-semibold font-poppins text-gray-50 cursor-pointer space-x-3"
				>
					<FaGlobeEurope className='h-8 w-8 text-gray-50"' />
					<span>CoinMarket</span>
				</Link>
				{/* links */}
				<div className="flex items-center space-x-6">
					<Link
						to="/cryptocurrencies"
						className="flex items-center space-x-3"
					>
						<FaCoins className="h-6 w-6 text-gray-50" />
						<span className="hidden md:inline-grid text-gray-50 font-medium font-poppins">
							Cryptocurrencies
						</span>
					</Link>

					<Link to="/news" className="flex items-center space-x-3">
						<FaRegNewspaper className="h-6 w-6 text-gray-50" />
						<span className="hidden md:inline-grid text-gray-50 font-medium font-poppins">
							News
						</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
