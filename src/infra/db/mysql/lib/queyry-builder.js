module.exports = class QueryBuilder {
	constructor() {
		this.query = "";
	}

	whereAndByObj(dataObj) {
		return this.addStep("WHERE", this.convertFromWhereObjToQuery(dataObj));
	}

	convertFromWhereObjToQuery(dataObj, type) {
		return Object.keys(dataObj)
			.map((key) => `${key} = '${dataObj[key]}'`)
			.join(` ${type} `);
	}

	from(tableName) {
		return this.addStep("from", tableName);
	}

	selectMultipleByObject(obj) {
		return this.selectMultipleByArray(Object.keys(obj));
	}

	selectMultipleByArray(data = []) {
		return this.select(data.join(","));
	}

	selectAll() {
		return this.select("*");
	}

	select(data) {
		return this.addStep("select", data);
	}

	addStep(step, data) {
		this.query += `${step}` + (data ? ` ${data} ` : "");
		return this;
	}

	generate() {
		return this.query;
	}
};
