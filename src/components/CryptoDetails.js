import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import millify from 'millify'
import {
	useGetCryptoDetailsQuery,
	useGetCryptoHistoryQuery,
} from '../services/cryptoApi'
import {
	AiFillDollarCircle,
	AiFillTrophy,
	AiFillThunderbolt,
	AiFillFund,
	AiFillMoneyCollect,
	AiFillCheckCircle,
	AiFillStop,
	AiFillExclamationCircle,
	AiOutlineNumber,
} from 'react-icons/ai'
import CardLayout from './UI/CardLayout'
import { Select } from 'antd'
import LineChart from './LineChart'

const { Option } = Select

function CryptoDetails() {
	const { coinId } = useParams()
	const [timeperiod, setTimeperiod] = useState('7d')
	const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
	const { data: coinHistory } = useGetCryptoHistoryQuery({
		coinId,
		timeperiod,
	})
	const cryptoDetails = data?.data?.coin

	if (isFetching) return 'Loading...'

	const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']

	console.log(data)

	const stats = [
		{
			title: 'Price to USD',
			value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
			icon: <AiFillDollarCircle />,
		},
		{
			title: 'Rank',
			value: cryptoDetails?.rank,
			icon: <AiOutlineNumber />,
		},
		{
			title: '24h Volume',
			value: `$ ${
				cryptoDetails?.volume && millify(cryptoDetails?.volume)
			}`,
			icon: <AiFillThunderbolt />,
		},
		{
			title: 'Market Cap',
			value: `$ ${
				cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
			}`,
			icon: <AiFillDollarCircle />,
		},
		{
			title: 'All-time-high(daily avg.)',
			value: `$ ${
				cryptoDetails?.allTimeHigh?.price &&
				millify(cryptoDetails?.allTimeHigh?.price)
			}`,
			icon: <AiFillTrophy />,
		},
	]

	const genericStats = [
		{
			title: 'Number Of Markets',
			value: cryptoDetails?.numberOfMarkets,
			icon: <AiFillFund />,
		},
		{
			title: 'Number Of Exchanges',
			value: cryptoDetails?.numberOfExchanges,
			icon: <AiFillMoneyCollect />,
		},
		{
			title: 'Apprroved Supply',
			value: cryptoDetails?.approvedSupply ? (
				<AiFillCheckCircle />
			) : (
				<AiFillStop />
			),
			icon: <AiFillExclamationCircle />,
		},
		{
			title: 'Total Supply',
			value: `$ ${
				cryptoDetails?.totalSupply &&
				millify(cryptoDetails?.totalSupply)
			}`,
			icon: <AiFillExclamationCircle />,
		},
		{
			title: 'Circulating Supply',
			value: `$ ${
				cryptoDetails?.circulatingSupply &&
				millify(cryptoDetails?.circulatingSupply)
			}`,
			icon: <AiFillExclamationCircle />,
		},
	]

	return (
		<div>
			<h1 className="font-bold font-poppins text-2xl mb-4">
				{cryptoDetails?.name} ({cryptoDetails?.symbol}) Price
			</h1>
			{/* Crypto Chart */}
			<div className="mb-2">
				<Select
					defaultValue="7d"
					className="w-1/3 text-gray-50"
					placeholder="Select Timeperiod"
					onChange={(value) => setTimeperiod(value)}
				>
					{time.map((date) => (
						<Option key={date} className="text-gray-50">
							{date}
						</Option>
					))}
				</Select>
				<LineChart
					coinHistory={coinHistory}
					currentPrice={millify(cryptoDetails?.price)}
					coinName={cryptoDetails?.name}
				/>
			</div>
			<div className="grid md:grid-cols-2 gap-4">
				<div>
					<h2 className="mb-2">
						{cryptoDetails?.name} Value Statistics
					</h2>
					<CardLayout>
						{stats.map(({ icon, title, value }) => (
							<div className="flex items-center justify-between py-2">
								<div className="flex items-center space-x-2">
									<span>{icon}</span>
									<p>{title}</p>
								</div>
								<span className="bg-gray-900 py-1 px-2 rounded-xl text-xs">
									{value}
								</span>
							</div>
						))}
					</CardLayout>
				</div>

				<div>
					<h2 className="mb-2">Other Value Statistics</h2>
					<CardLayout>
						{genericStats.map(({ icon, title, value }) => (
							<div className="flex items-center justify-between py-2">
								<div className="flex items-center space-x-2">
									<span>{icon}</span>
									<p>{title}</p>
								</div>
								<span className="bg-gray-900 py-1 px-2 rounded-xl text-xs">
									{value}
								</span>
							</div>
						))}
					</CardLayout>
				</div>
			</div>

			{/* Crypto Links */}
			<div>
				<div>
					<h2 className="mt-4 mb-2">{cryptoDetails?.name} Links</h2>
					<CardLayout>
						{cryptoDetails?.links?.map((link) => (
							<div
								className="flex justify-between items-center p-2"
								key={link.name}
							>
								<p>{link.type}</p>
								<a
									href={link.url}
									target="_blank"
									rel="noreferrer"
									className="text-green-500"
								>
									{link.name}
								</a>
							</div>
						))}
					</CardLayout>
				</div>
			</div>
		</div>
	)
}

export default CryptoDetails
