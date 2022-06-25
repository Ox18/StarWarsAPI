const { StarwarsClient } = require("../api");
const ResourceNotFoundException = require("../../../exceptions/ResourceNotFound.exception");

const findByIdStarshipService = async (id) => {
	const baseURL = `starships/${id}/`;
	const response = await StarwarsClient.get(baseURL);

	const {
		name: nombre,
		model: modelo,
		manufacturer: fabricante,
		cost_in_credits: costo_en_creditos,
		length: longitud,
		max_atmosphering_speed: max_velocidad_atmosferica,
		crew: tripulacion,
		passengers: pasajeros,
		cargo_capacity: capacidad_carga,
		consumables: tiempo_consumo,
		hyperdrive_rating: hiperpropulsion,
		MGLT: mglt,
		starship_class: clase_de_estrella,
		pilots: pilotos,
		films: peliculas,
		created: fecha_creacion,
		edited: fecha_actualizacion,
		url,
	} = response.data;
	return {
		nombre,
		modelo,
		fabricante,
		costo_en_creditos,
		longitud,
		max_velocidad_atmosferica,
		tripulacion,
		pasajeros,
		capacidad_carga,
		tiempo_consumo,
		hiperpropulsion,
		mglt,
		clase_de_estrella,
		pilotos,
		peliculas,
		fecha_creacion,
		fecha_actualizacion,
		url,
		id
	};
};

module.exports = {
	findByIdStarshipService,
};
