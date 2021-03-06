const MySQLHelper = require("../lib/mysql-helper");

module.exports = class StarhipsRepository {
	static tableName = "starships";

	static async findById(id) {
		const sql = "select * from " + this.tableName + " where id = " + id;
		const response = await MySQLHelper.execute(sql);
		return response;
	}

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
		const response = await MySQLHelper.insert(sql, starship);

		return response;
	}
};
