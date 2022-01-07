import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillMoneyCollect } from 'react-icons/ai'

function Footer() {
	return (
		<div className="bg-gray-900">
			<div className="3xl:max-w-screen-2xl mx-auto w-full py-10 px-5">
				<div className="flex justify-between items-center py-2">
					<div className="space-y-2">
						<ul className="flex items-center space-x-2">
							<li>
								<Link to="/cryptocurrencies">
									Cryptocurrencies
								</Link>
							</li>
							<li>
								<AiFillMoneyCollect className="h-4 w-4 text-gray-50" />
							</li>
							<li>
								<Link to="/news">News</Link>
							</li>
						</ul>
						<p className="text-gray-400">
							© 2022 -{' '}
							<a
								href="https://vadimghedreutan.io"
								target="_blank"
								rel="noreferrer"
							>
								vadimghedreutan.io
							</a>
						</p>
					</div>

					<div>
						<a
							href="https://github.com/vadimghedreutan"
							rel="noreferrer"
						>
							<AiFillGithub className="h-8 w-8 text-gray-50 cursor-pointer transition transform hover:scale-110 duration-500" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
