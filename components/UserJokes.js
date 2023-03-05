import { useState } from "react"

export default function UserJokes({ userJokes }) {

    const [allUserJokes, setUserJokes] = useState(userJokes)

    return (
        <div className="flex flex-col justify-center items-center gap-14">
            <h2 className="text-xl">User-Submitted Jokes</h2>
            {allUserJokes.map(joke => {
                return (
                    <div key={joke.id}>
                        {joke.setup} {joke.punchline}
                    </div>
                )
            })}
        </div>
    )
}