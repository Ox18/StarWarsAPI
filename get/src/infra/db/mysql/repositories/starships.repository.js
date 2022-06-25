const MySQLHelper = require("../lib/mysql-helper");

module.exports = class StarhipsRepository {
	static tableName = "starships";

	static async findById(id) {
		const sql = "select * from " + this.tableName + " where id = " + id;
		const response = await MySQLHelper.execute(sql);
		return response;
	}
};
