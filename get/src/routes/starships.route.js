const getItemStartshipsController = require("../controllers/get-item-starships.controller");

module.exports = (router) => {
	router.get("/starships/:id", getItemStartshipsController);
};
