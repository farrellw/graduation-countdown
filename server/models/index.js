if(!global.hasOwnProperty('db')){
	var Sequelize = require('sequelize');
	var sequelize = null;

	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres',
		protocol: 'postgres',
		port: match[4],
		host: match[3],
		logging: true
	});

	global.db = {
		Sequelize: Sequelize,
		sequelize: sequelize,
		Phrase: sequelize.import(__dirname + '/phrase')
	}
}