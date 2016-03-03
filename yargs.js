module.exports = require('yargs')
	.command('create', 'Create new entry', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Entry name, such as website',
				type: 'string'
			}, user: {
				demand: true,
				alias: 'u',
				description: 'User name that for site credentials',
				type: 'string'
			}, password: {
				demand: true,
				alias: 'p',
				description: 'password for site entry',
				type: 'string'
			}, masterPassword: {
				demand: true,
				alias: 'm',
				description: 'password to decrypt entries',
				type: 'string'
			}
		}).help('help');
	})
	.command('find', 'Find entry', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Find password based on site name',
				type: 'string'
			}, masterPassword: {
				demand: true,
				alias: 'm',
				description: 'password to decrypt entries',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;