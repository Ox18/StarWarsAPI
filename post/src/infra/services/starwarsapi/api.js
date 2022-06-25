const axios = require("axios");

const StarwarsClient = axios.create({
	baseURL: "https://swapi.py4e.com/api/",
	timeout: 1000,
});

module.exports = {
	StarwarsClient,
};
