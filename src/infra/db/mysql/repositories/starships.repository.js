const MySQLHelper = require("../lib/mysql-helper");

module.exports = class StarhipsRepository {
	static tableName = "starhips";

	async findById(id) {
		const sql = "SELECT * FROM ? WHERE id = ?";

		const response = await MySQLHelper.execute(sql, [this.tableName, id]);
		if (response.length === 0) {
			throw new Error("Couldn't find the starhips");
		} else {
			return response[0];
		}
	}
};
