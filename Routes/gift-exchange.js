const express = require("express");
const GiftExchange = require("../Models/gift-exchange.js");
const { BadRequestError } = require("../utils/errors.js");

var route = express.Router();

var users = { names: [] };
route.post("/pairs", (req, res, next) => {
	users = req.body;
	try {
		if (!users || !users.names)
			return next(new BadRequestError("Body cannot be empty"));

		res.send(GiftExchange.pairs(users.names, next));
	} catch (err) {
		return next(new BadRequestError("Body cannot be empty"));
	}
});

route.post("/traditional", (req, res, next) => {
	users = req.body;
	try {
		if (!users) next(new BadRequestError("Body cannot be empty"));
		res.send(GiftExchange.traditional(users.names));
	} catch (err) {
		return next(new BadRequestError("Body cannot be empty"));
	}
});

module.exports = route;
