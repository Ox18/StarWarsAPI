"use strict";

const StarshipsRepository = require("../infra/db/mysql/repositories/starships.repository");

module.exports.postStarship = async (event) => {
	try {

		const body = JSON.parse(event.body)

		const { pilotos, peliculas } = body;

		const lastData = {
			...body,
			pilotos: JSON.stringify(pilotos),
			peliculas: JSON.stringify(peliculas),
		};

		const newData = await StarshipsRepository.create(lastData);

		return {
			statusCode: 200,
			body: JSON.stringify(newData),
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
