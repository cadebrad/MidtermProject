const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");


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


app.put("/cities/:id/like", async (req, res) => {
    const id = req.params.id; // Read parameter id (assuming it's a unique identifier like ObjectId or custom id)
    console.log("City to Update Likes for ID:", id);
    await client.connect();
    try {
        const query = { _id: new ObjectId(id) }; // Ensure the correct identifier format, e.g., ObjectId
        const updateData = {
            $inc: { likes: 1 } // Increment the 'likes' field by 1
        };

        // Execute the update operation
        const results = await db.collection("Cities").updateOne(query, updateData);

        if (results.modifiedCount === 1) {
            res.status(200).send({ message: "City likes updated successfully." });
        } else {
            res.status(404).send({ message: "City not found or no changes made." });
        }
    } catch (error) {
        console.error("Error updating city likes:", error);
        res.status(500).send({ error: "An internal server error occurred." });
    } finally {
        await client.close(); // Close the database connection
    }
});


app.put("/countries/:id/like", async (req, res) => {
    const id = req.params.id; // Read parameter id (assuming it's a unique identifier like ObjectId or custom id)
    console.log("City to Update Likes for ID:", id);
    await client.connect();
    try {
       
        const query = { _id: new ObjectId(id) }; // Ensure the correct identifier format, e.g., ObjectId
        const updateData = {
            $inc: { likes: 1 } // Increment the 'likes' field by 1
        };

        // Execute the update operation
        const results = await db.collection("Countries").updateOne(query, updateData);

        if (results.modifiedCount === 1) {
            res.status(200).send({ message: "Country likes updated successfully." });
        } else {
            res.status(404).send({ message: "Country not found or no changes made." });
        }
    } catch (error) {
        console.error("Error updating Country likes:", error);
        res.status(500).send({ error: "An internal server error occurred." });
    } finally {
        await client.close(); // Close the database connection
    }
});
app.post("/favorites", async (req, res) => {
    try {
        const cityData = req.body; // Read the city data from the request body
        console.log("City to Add to Favorites:", cityData);

        // Validate that the required fields are present
        if (!cityData.name || !cityData.country || !cityData.description) {
            return res.status(400).send({ error: "Missing required fields: name, country, or description." });
        }

        await client.connect(); // Connect to MongoDB
        

        // Insert the city data into the Favorites collection
        const result = await db.collection("Favorites").insertOne(cityData);

        res.status(201).send({ message: "City added to Favorites successfully.", cityId: result.insertedId });
    } catch (error) {
        console.error("Error adding city to Favorites:", error);
        res.status(500).send({ error: "An internal server error occurred." });
    } finally {
        await client.close(); // Close the database connection
    }
});





