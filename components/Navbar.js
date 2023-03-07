import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();
    return (
        <nav className="flex justify-between text-sm md:text-base px-8 py-6 md:px-16 shadow">
            <Link href="/" className="bold">Random Joke Generator</Link>
            <div className="nav-links flex gap-7">
                <Link href="/" className="underline-anim">Home</Link>
                <Link href="/submit" className="underline-anim">Add</Link>
                {session ? (
                    <>
                        <span>Hello, {session.user.name}</span>
                        <button onClick={() => signOut() } className="underline-anim">Log Out</button>
                    </>
                    ) : (
                    <>
                        <button onClick={() => signIn()} className="underline-anim">Log In</button>
                    </>
                    )}
            </div>
        </nav>
    )
}