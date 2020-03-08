const express = require("express");

const app = express();

app.use(express.json());

let routes = require("./routes");

app.use("/", routes);

let porta = 3000

app.listen(porta, () => {
	console.log('Servidor rodando na porta %d', porta)
});