const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = "8081";
const host = "localhost";
const url = "mongodb://localhost:27017/";
const dbName = "319Final";
const client = new MongoClient(url);
const db = client.db(dbName);

app.use(cors());
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`App listening at http://${host}:${port}`);
});



app.get("/cities", async (req, res) => {
    try {
        await client.connect();
        console.log("Node connected successfully to GET MongoDB");

        const results = await client.db(dbName)
            .collection("Cities")
            .find({})
            .limit(100)
            .toArray();

        console.log(results);
        res.status(200).send(results);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    }
});
app.get("/countries", async (req, res) => {
    try {
        await client.connect();
        console.log("Node connected successfully to GET MongoDB");

        const results = await client.db(dbName)
            .collection("Countries")
            .find({})
            .limit(100)
            .toArray();

        console.log(results);
        res.status(200).send(results);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send({ error: 'An internal server error occurred' });
    }
});
