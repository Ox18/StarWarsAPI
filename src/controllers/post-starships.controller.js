const StarshipsRepository = require("../infra/db/mysql/repositories/starships.repository");

const createStarshipValidator = require("../validators/create-starships.validator");

module.exports = async (req, res) => {
	try {
		const { body } = req;

		await createStarshipValidator.validate(body);

		const { pilotos, peliculas } = body;

		const lastData = {
			...body,
			pilotos: JSON.stringify(pilotos),
			peliculas: JSON.stringify(peliculas),
		};

		const newData = await StarshipsRepository.create(lastData);

		res.json(newData);
	} catch (ex) {
		res.status(404).json({
			msg: ex.message,
		});
	}
};
