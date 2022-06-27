const routerGiftExchange = require("./Routes/gift-exchange.js");
const morgan = require("morgan");
const express = require("express");
const { BadRequestError } = require("./utils/errors.js");
const { NotFoundError } = require("./utils/errors.js");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.get("/", (req, res) => {
	console.log(req);
	res.status(200).send({ ping: "pong" });
});
app.use("/gift-exchange", routerGiftExchange);

app.use((req, res, next) => {
	return next(new NotFoundError());
});

app.use((error, req, res, next) => {
	let message = error.message || "Something went wrong in the application";
	let status = error.status || 500;

	return res
		.status(status)
		.json({ error: { status: status, message: message } });
});
module.exports = app;
