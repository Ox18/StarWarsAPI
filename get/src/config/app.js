const express = require("express");
const setupRoutes = require("./routes");
const setupMiddlewares = require("./middlewares");

module.exports = async () => {
	const app = express();
	setupMiddlewares(app);
	setupRoutes(app);
	return app;
};
