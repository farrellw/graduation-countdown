module.exports = function(sequelize, DataTypes){
	return sequelize.define('Phrase', {
		id: DataTypes.STRING,
		text: DataTypes.STRING,
		author: DataTypes.STRING,
	})
};