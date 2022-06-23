module.exports = (router) => {
	router.get("/starships", (req, res) => {
		res.send("lista de estrellas");
	});

	router.get("/starships/:id", (req, res) => {
		res.send("lista de estrellas " + req.params.id);
	});
};
