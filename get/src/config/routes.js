const { Router } = require("express");
const { readdirSync } = require("fs");
const { join } = require("path");

module.exports = (app) => {
	const router = Router();
	app.use("/", router);
	readdirSync(join(__dirname, "../routes")).map(async (file) => {
		if (file.endsWith(".js")) {
			await require(`../routes/${file}`)(router);
		}
	});
};
