const ENV = require("./config/env");

(async () => {
	const setupApp = require("./config/app");
	const app = await setupApp();
	app.listen(ENV.port, () => {
		console.log(`Server is running on port ${ENV.port}`);
	});
})();