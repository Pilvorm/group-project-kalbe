import axios from "axios";

export default async function (req, res) {
    if (req.method === "GET") {
        const response = await fetch(`${process.env.API_URL}/resources`);
        const data = await response.json();

        return res.send(data);
    }

    if (req.method === "POST") {
        const {name, setup, punchline } = req.body;

        var url = `${process.env.API_URL}/resources`;

        if (!name || !setup || !punchline) {
            return res.status(422).send("Some data are missing")
        }

        try {
            const axiosRes = await axios[req.method.toLowerCase()](url, req.body)
            return res.send(axiosRes.data)
        } catch {
            return res.status(422).send("Data cannot be stored!")
        }

    }
}