// Importerer pakker
const express = require("express");
const mysql = require("mysql2/promise");
const { createConnection } = require("./database/database.js");
// Definerer port og express serveren
const app = express();
const port = 3000;
// Forteller express at malmotor skal være ejs
app.set("view engine", "ejs");
// Definerer rute for CSS filer
app.use(express.static("public"));

// Rute til hjemmeside
app.get("/", async (req, res) => {
	// Lager kobler til databasen
	const connection = await createConnection();
	// Henter data fra databasen
	const [results] = await connection.query("SELECT * FROM car");
	// Definerer responsen på denne ruten, spesifiserer mal og sender data til mal.
	res.render("index", { cars: results });
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.get("/bruker", (req, res) => {
	res.render("bruker", {
		names: ["per", "Ole", "Olesya", "Ådne"],
		fact: true,
		// Henter URL paramter.
		req: req.query,
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
