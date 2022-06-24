const postStarshipsController = require("../controllers/post-starships.controller");
const getItemStartshipsController = require("../controllers/get-item-starships.controller");

module.exports = (router) => {
	router.get("/starships", postStarshipsController);
	router.get("/starships/:id", getItemStartshipsController);
};
