
const express = require("express");
const app = express();
const PORT = 3001;

const fs = require("fs");
const path = require("path");
const pathToFile = path.resolve("./data.json");
const cors = require("cors")

var corsOptions = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

const getResources = () => JSON.parse(fs.readFileSync(pathToFile))

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World")
})

// Show jokes
app.get("/api/resources", (req, res) => {
    const resources = getResources();
    res.send(resources);
})

// Add new joke
app.post("/api/resources", (req, res) => {
    const resources = getResources()
    const resource = req.body

    resource.createdAt = new Date()
    resource.id = Date.now().toString()
    resources.unshift(resource)

    fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
        if (error) {
            return res.status(422).send("Cannot store data in the file!")
        }

        return res.send("Data has been saved!")
    }) // 2 -> indent
})

app.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT)
})