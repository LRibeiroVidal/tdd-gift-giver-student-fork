import routerGiftExchange from "./Routes/gift-exchange.js";
import morgan from "morgan";
import express, { application } from "express";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.get("/", (req, res) => {
	console.log(req);
	res.send({ ping: "pong" });
});
app.use("/gift-exchange", routerGiftExchange);

export default app;
