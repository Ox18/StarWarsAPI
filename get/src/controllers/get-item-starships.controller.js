const StarshipsRepository = require("../infra/db/mysql/repositories/starships.repository");
const {
	findByIdStarshipService,
} = require("../infra/services/starwarsapi/starships/find-by-id.service");

module.exports = async (req, res) => {
	try {
		const { id } = req.params;

		const starshipsResponseList = await StarshipsRepository.findById(id);

		if (starshipsResponseList.length > 0) {
			res.json(starshipsResponseList[0]);
		} else {
			const data = await findByIdStarshipService(id);
			res.json(data);
		}
	} catch (ex) {
		res.status(404).json({
			msg: ex.message,
		});
	}
};
