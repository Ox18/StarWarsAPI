const postStarshipsController = require("../controllers/post-starships.controller");

module.exports = (router) => {
	router.post("/starships", postStarshipsController);
};
