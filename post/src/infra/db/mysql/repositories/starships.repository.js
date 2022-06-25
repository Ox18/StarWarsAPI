const MySQLHelper = require("../lib/mysql-helper");

module.exports = class StarhipsRepository {
	static tableName = "starships";

	static async create(starship) {
		const columns = Object.keys(starship)
			.map((column) => "`" + column + "`")
			.join(",");
		const values = Object.values(starship)
			.map((value) => '"' + value + '"')
			.join(",");
		const sql =
			"INSERT INTO " +
			this.tableName +
			" (" +
			columns +
			") VALUES (" +
			values +
			")";
		console.log(sql);
		const response = await MySQLHelper.insert(sql, starship);

		return response;
	}
};
