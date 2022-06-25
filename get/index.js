
const StarshipsRepository = require("./src/infra/db/mysql/repositories/starships.repository");
const {
	findByIdStarshipService,
} = require("./src/infra/services/starwarsapi/starships/find-by-id.service");

exports.handler = async (event) => {
	const id = Number(event.id);

	try {
		const starshipsResponseList = await StarshipsRepository.findById(id);

		let response = {
			statusCode: 200,
		};

		if (starshipsResponseList.length > 0) {
			response.body = starshipsResponseList[0];
		} else {
			const data = await findByIdStarshipService(id);
			response.body = data;
		}
		return response;
	} catch (ex) {
		let response = {
			statusCode: 500,
		};
		if (ex.name === "ResourceNotFound") {
			response = {
				statusCode: 404,
				msg: ex.message,
			};
		} else {
			response.msg = "Internal Server Error --> " + ex.message;
		}
		return response;
	}
};
