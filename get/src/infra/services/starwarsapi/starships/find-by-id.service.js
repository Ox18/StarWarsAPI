const { StarwarsClient } = require("../api");

const findByIdStarshipService = async (id) => {
	const baseURL = `starships/${id}/`;
	const response = await StarwarsClient.get(baseURL);
	return response.data;
};

module.exports = {
	findByIdStarshipService,
};
