const express = require("express");
const setupRoutes = require("./routes");

module.exports = async () => {
	const app = express();
	setupRoutes(app);
	return app;
};
