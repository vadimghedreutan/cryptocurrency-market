import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import CardLayout from './UI/CardLayout'

function CryptoList({ id, rank, name, iconUrl, price, marketCap, change }) {
	return (
		<CardLayout>
			<Link to={`/crypto/${id}`}>
				<header className="flex justify-between font-semibold rounded-t-lg text-base">
					<h2 className="text-gray-300">{`${rank}. ${name}`}</h2>
					<img src={iconUrl} alt="" className="h-6 w-6" />
				</header>
				<div className="py-8 ">
					<p className="font-semibold text-xl text-gray-100">
						<span className="text-gray-400">Price:</span>{' '}
						{millify(price)}
					</p>
				</div>
				<footer className="flex justify-between  text-xs">
					<p>MarketCap: {millify(marketCap)}</p>
					<p className="text-green-500">
						Daily Change: {millify(change)}
					</p>
				</footer>
			</Link>
		</CardLayout>
	)
}

export default CryptoList
