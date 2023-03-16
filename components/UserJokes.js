import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function UserJokes({ userJokes }) {

    const [allUserJokes, setUserJokes] = useState(userJokes)
    const router = useRouter()

    return (
        <div id="user-jokes" className="my-16 flex flex-col justify-center items-center gap-14">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl md:text-2xl font-semibold">User-Submitted Jokes</h2>
                {router.pathname != "/submit" ? <Link href="/submit" className='link-btn text-sm w-fit mt-8 px-8 py-3 border border-white rounded bg-black text-white hover:border-black hover:bg-transparent hover:text-black transition-all'>Submit your own joke!</Link> : ""}
            </div>
            <div className="flex flex-col gap-14 items-center max-h-[600px] overflow-auto">
                {allUserJokes.map(joke => {
                    return (
                        <div key={joke.id} className="user-jokes">
                            <div>
                                <p className="text-[#6C757D]">{joke.name}</p>
                            </div>
                            <div className="col-start-2 col-end-4">
                                <p>{joke.setup}</p>
                                <p className="italic">{joke.punchline}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}