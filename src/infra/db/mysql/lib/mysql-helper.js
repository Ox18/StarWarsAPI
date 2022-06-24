const mysql = require("mysql2/promise");
const CONFIG = require("./mysql-config");

class MySQLHelper {
	static async insert(sql, lastData) {
		const response = await MySQLHelper.execute(sql);
		return {
			id: response.insertId,
			...lastData
		};
	}

	static async execute(sql, params) {
		const connection = await mysql.createConnection(CONFIG);
		const [results] = await connection.execute(sql, params);
		return results;
	}
}

module.exports = MySQLHelper;
