const yup = require("yup");

module.exports = yup.object().shape({
	nombre: yup.string().required("La propiedad 'nombre' es requerida"),
	modelo: yup.string().required("La propiedad 'modelo' es requerida"),
	fabricante: yup.string().required("La propiedad 'fabricante' es requerida"),
	costo_en_creditos: yup
		.number()
		.required("La propiedad 'costo_en_creditos' es requerida"),
	longitud: yup.number().required("La propiedad 'longitud' es requerida"),
	max_velocidad_atmosferica: yup
		.string()
		.required("La propiedad 'max_velocidad_atmosferica' es requerida"),
	tripulacion: yup.number().required("La propiedad 'tripulacion' es requerida"),
	pasajeros: yup.number().required("La propiedad 'pasajeros' es requerida"),
	capacidad_carga: yup
		.number()
		.required("La propiedad 'capacidad_carga' es requerida"),
	tiempo_consumo: yup
		.string()
		.required("La propiedad 'tiempo_consumo' es requerida"),
	hiperpropulsion: yup
		.string()
		.required("La propiedad 'hiperpropulsion' es requerida"),
	mglt: yup.string().required("La propiedad 'mglt' es requerida"),
	clase_de_estrella: yup
		.string()
		.required("La propiedad 'clase_de_estrella' es requerida"),
	pilotos: yup
		.array()
		.of(yup.string())
		.compact((v) => !v.checked)
		.required("La propiedad 'pilotos' es requerida"),
	peliculas: yup
		.array()
		.of(yup.string())
		.compact((v) => !v.checked)
		.required("La propiedad 'peliculas' es requerida"),
	url: yup.string().required("La propiedad 'url' es requerida"),
});
