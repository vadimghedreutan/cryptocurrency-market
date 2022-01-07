import React from 'react'
import { Line } from 'react-chartjs-2'

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
	const coinPrice = []
	const coinTimestamp = []

	for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
		coinPrice.push(coinHistory?.data?.history[i].price)
	}

	for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
		coinTimestamp.push(
			new Date(
				coinHistory?.data?.history[i].timestamp
			).toLocaleDateString()
		)
	}
	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: 'Price In USD',
				data: coinPrice,
				fill: false,
				backgroundColor: '#0071bd',
				borderColor: '#0071bd',
			},
		],
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: false,
				text: 'Chart.js Line Chart',
			},
		},
	}

	return (
		<>
			<div className="flex justify-between items-center">
				<h2 className="text-green-500">{coinName} Price Chart </h2>
				<div className="price-container">
					<h2 className="price-change">
						Change: {coinHistory?.data?.change} %
					</h2>
					<h2 className="current-price">
						Current {coinName} Price: $ {currentPrice}
					</h2>
				</div>
			</div>
			<Line data={data} options={options} />
		</>
	)
}

export default LineChart
