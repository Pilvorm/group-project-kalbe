import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";


export default function Navbar() {
    const { data: session } = useSession();
    const router = useRouter();

    function handleAddClick(){
        if(session){
            router.push('/submit');
        }else{
            signIn();
        }
    }

    return (
        <nav className="flex justify-between text-sm md:text-base px-8 py-6 md:px-16 shadow">
            <Link href="/" className="bold">Random Joke Generator</Link>
            <div className="nav-links flex gap-7">
                <Link href="/" className="underline-anim">Home</Link>
                <button onClick={handleAddClick} className="underline-anim">Submit</button>
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

export function withAuth(Component) {
    return function AuthenticatedComponent(props) {
      const { data: session, status } = useSession();
      const router = useRouter();
  
      React.useEffect(() => {
        if (status === "loading") return; // Don't show anything while loading
        if (!session) router.push("/"); // Redirect to homepage if user is not authenticated
      }, [session, status, router]);
  
      if (status === "loading") return null; // Don't show anything while loading
      if (!session) return null; // Don't render anything if user is not authenticated
  
      return <Component {...props} />;
    };
}