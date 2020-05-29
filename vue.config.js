module.exports = {
	module : {
		rules : [
			{
				test: /.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader'
			},
			{
				test: /.tsx?$/,
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/.vue$/],
				}
			},
		]
	}
};
