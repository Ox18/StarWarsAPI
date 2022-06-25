"use strict";

const StarshipsRepository = require("../infra/db/mysql/repositories/starships.repository");
const {
	findByIdStarshipService,
} = require("../infra/services/starwarsapi/starships/find-by-id.service");

module.exports.getStarship = async (event) => {
	const id = Number(event.queryStringParameters.id);
	try {
		const starshipsResponseList = await StarshipsRepository.findById(id);
		let item = null;

		if (starshipsResponseList.length > 0) {
			item = starshipsResponseList[0];
		} else {
			const data = await findByIdStarshipService(id);
			item = data;
		}
		return {
			statusCode: 200,
			body: JSON.stringify(item),
		};
	} catch (ex) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: ex.message,
			}),
		};
	}
};
