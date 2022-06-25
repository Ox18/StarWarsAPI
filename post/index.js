const StarshipsRepository = require("./src/infra/db/mysql/repositories/starships.repository");

exports.handler = async (event) => {
	try {
		const { pilotos, peliculas } = event;

		const lastData = {
			...event,
			pilotos: JSON.stringify(pilotos),
			peliculas: JSON.stringify(peliculas),
		};

		const newData = await StarshipsRepository.create(lastData);

		return {
			statusCode: 200,
			body: newData,
		};
	} catch (ex) {
		return {
			statusCode: 500,
			body: ex.message,
		};
	}
};
