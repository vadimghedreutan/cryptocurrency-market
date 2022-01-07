import { useState, useEffect } from 'react'
import { useGetCryptoQuery } from '../services/cryptoApi'
import CryptoList from './CryptoList'
import Loader from './UI/Loader'

function Cryptocurrencies({ simplified }) {
	const count = simplified ? 10 : 100
	const { data: cryptosData, isFetching } = useGetCryptoQuery(count)
	const [cryptos, setCryptos] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	useEffect(() => {
		const filtredData = cryptosData?.data?.coins.filter((coin) =>
			coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
		)
		setCryptos(filtredData)
	}, [cryptosData, searchTerm])

	if (isFetching) return <Loader />

	return (
		<>
			{!simplified && (
				<div className="pb-4">
					<form class="group relative">
						<svg
							width="20"
							height="20"
							fill="currentColor"
							class="absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-blue-500"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							/>
						</svg>
						<input
							class="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 
							text-gray-50 placeholder-gray-400 bg-gray-700 rounded-md py-2 pl-10 ring-1 ring-gray-600 shadow-sm"
							type="text"
							name="search"
							placeholder="Search Cryptocurrency"
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</form>
				</div>
			)}
			<div className="gap-4 grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))]">
				{cryptos?.map((currency) => (
					<CryptoList
						key={currency.id}
						id={currency.id}
						rank={currency.rank}
						name={currency.name}
						iconUrl={currency.iconUrl}
						price={currency.price}
						marketCap={currency.marketCap}
						change={currency.change}
					/>
				))}
			</div>
		</>
	)
}

export default Cryptocurrencies
