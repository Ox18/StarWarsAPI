const bodyParser = require("../middlewares/body-parser");
const morgan = require("../middlewares/morgan");
const contentType = require("../middlewares/content-type");

module.exports = function (app) {
	app.use(bodyParser.encoded);
	app.use(bodyParser.json);
	app.use(morgan);
	app.use(contentType);
};