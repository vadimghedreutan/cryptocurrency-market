const CracoLessPlugin = require('craco-less')

module.exports = {
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@select-background': '#374151',
							'@link-hover-color': '#F1F2F6',
							'@select-dropdown-bg': '#374151',
							'@select-border-color': '#4B5666',
							'@select-item-selected-bg': '#4B5666',
							'@select-item-active-bg': '#4B5666',
						},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
}
