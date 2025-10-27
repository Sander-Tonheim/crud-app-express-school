const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2/promise");
const { createConnection } = require("./database/database.js");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", async (req, res) => {
	const connection = await createConnection();
	const [results] = await connection.query("SELECT * FROM car");
	res.render("index", { cars: results });
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.get("/bruker", (req, res) => {
	res.render("bruker", { names: ["per", "Ole", "Olesya", "Ådne"], fact: true, req: req.query });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
