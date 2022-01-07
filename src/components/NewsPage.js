import { useState } from 'react'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptoQuery } from '../services/cryptoApi'
import CardLayout from './UI/CardLayout'
import { Select } from 'antd'
import Loader from './UI/Loader'

const { Option } = Select

const demoImage =
	'https://images.unsplash.com/photo-1627540056810-d2223597e2ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80'

function News({ simplified }) {
	const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
	const { data: cryptoNews } = useGetCryptoNewsQuery({
		newsCategory,
		count: simplified ? 6 : 12,
	})
	const { data } = useGetCryptoQuery(100)

	if (!cryptoNews?.value) return <Loader />

	return (
		<>
			{!simplified && (
				<div className="pb-4">
					<Select
						showSearch
						className="w-1/3 text-gray-50"
						placeholder="Select a Crypto"
						optionFilterProp="children"
						onChange={(value) => setNewsCategory(value)}
						filterOption={(input, option) =>
							option.children
								.toLowerCase()
								.indexOf(input.toLowerCase()) >= 0
						}
					>
						<Option
							value="Cryptocurency"
							className="text-gray-50 font-medium"
						>
							Cryptocurrency
						</Option>
						{data?.data?.coins?.map((currency) => (
							<Option
								value={currency.name}
								className="text-gray-50"
							>
								{currency.name}
							</Option>
						))}
					</Select>
				</div>
			)}
			<div className="gap-4 grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))]">
				{cryptoNews.value.map((news, i) => {
					return (
						<CardLayout>
							<a
								href={news.url}
								target="_blank"
								rel="noreferrer"
								className="flex flex-col"
								key={i}
							>
								<img
									className="w-14 h-14 rounded-full p-1 object-cover"
									src={
										news?.image?.thumbnail?.contentUrl ||
										demoImage
									}
									alt=""
								/>
								<div className="py-4 text-left">
									<blockquote>
										<p className="font-medium text-gray-400 line-clamp-3">
											“{news.description}”
										</p>
									</blockquote>
								</div>
								<div className="flex justify-between items-center py-1">
									<p className="text-xs text-gray-400">
										{news.provider[0]?.name}
									</p>
									<p className="text-xs text-green-500">
										{moment(news.datePublished)
											.startOf('ss')
											.fromNow()}
									</p>
								</div>
							</a>
						</CardLayout>
					)
				})}
			</div>
		</>
	)
}

export default News
