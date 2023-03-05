import { userJokes } from "@/data/userJokes"

export default async function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(userJokes)
    }
    else if(req.method === 'POST') {
        const { id, setup, punchline } = req.body

        const newJoke = {
            [id]: Date.now().toString(),
            setup: setup,
            punchline: punchline
        }

        if(!setup || !punchline) {
            return res.status(422).send("Some data are missing")
        }

        try {
            userJokes.push(newJoke)
            return res.status(201).json(newJoke)
            // const axiosRes = await axios[req.method.toLowerCase()](url, req.body)
            // return res.send(axiosRes.data)
        } catch {
            return res.status(422).send("Data cannot be stored!")
        }

        // comments.push(newComment)
        // return res.status(201).json(newComment)
    }
}

