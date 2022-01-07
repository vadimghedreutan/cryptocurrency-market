function CardLayout(props) {
	return (
		<div
			{...props}
			className="bg-gray-700 rounded-xl shadow-lg shadow-gray-700/20 p-3"
		>
			{props.children}
		</div>
	)
}

export default CardLayout
