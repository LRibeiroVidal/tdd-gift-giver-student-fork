import morgan from "morgan";
import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`🚀 Server listening at http://localhost:${port}`);
});
morgan("tiny");

app.get("/", (req, res) => {
	console.log(req);
	res.send({ ping: "pong" });
});
