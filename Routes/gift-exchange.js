import express, { request } from "express";
import GiftExchange from "../Models/gift-exchange.js";

var route = express.Router();

var users = { names: [] };
route.post("/pairs", (req, res) => {
	users = req.body.names;
	try {
		res.send({ data: GiftExchange.pairs(users) });
	} catch (err) {
		console.log(err);
	}
});

route.post("/traditional", (req, res) => {
	users = req.body.names;
	try {
		res.send({ data: GiftExchange.traditional(users) });
	} catch (err) {
		console.log(err);
	}
});

export default route;
