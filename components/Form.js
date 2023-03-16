import { useState } from "react";
import { useSession } from "next-auth/react";

import axios from "axios";
import { useRouter } from "next/router";
import { withAuth } from "./Navbar";

let DEFAULT_DATA = {
    name: "",
    setup: "",
    punchline: "",
}

function Form() {
    const { data: session } = useSession();
    DEFAULT_DATA.name = session ? session.user.name : ""
    const [form, setForm] = useState(DEFAULT_DATA);

    const handleChange = (e) => {
        setForm(prevForm => {
            return {
                ...prevForm,
                [e.target.name]: e.target.value
            }
        })
    }

    const router = useRouter();
    const submitForm = () => {
        axios.post("/api/resources", form)
            .then(_ => router.push("/#user-jokes"))
            .catch(err => alert(err?.response?.data));
        // ? (safe guard) -> undefined data
    }

    function resetForm() {
        setForm(DEFAULT_DATA)
    }

    return (
        <div className="shadow p-8 w-[100%] sm:w-[80%] lg:w-[60%] mt-16 mx-auto">
            <h2>Submit Joke</h2>
            <form className="mt-5 flex flex-col gap-5">

                <div className="form-group flex flex-col gap-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required value={form.name} onChange={handleChange} className="outline outline-1 rounded px-2 py-4 h-12" />
                </div>

                <div className="form-group flex flex-col gap-3">
                    <label htmlFor="setup">Setup</label>
                    <input type="text" name="setup" id="setup" required value={form.setup} onChange={handleChange} className="outline outline-1 rounded px-2 py-4 h-12" />
                </div>

                <div className="form-group flex flex-col gap-3">
                    <label htmlFor="punchline">Punchline</label>
                    <textarea type="text" name="punchline" id="punchline" required value={form.punchline} onChange={handleChange} className="outline outline-1 align-top rounded px-2 py-4 h-12" />
                </div>

                <div className="action flex flex-col gap-5 items-center sm:flex-row">
                    <button type="button" onClick={submitForm} className="px-8 py-3 border border-white rounded bg-black text-white hover:border-black hover:bg-transparent hover:text-black transition-all">
                        Submit
                    </button>
                    <button type="button" onClick={resetForm} className="px-8 py-3 border border-white rounded bg-black text-white hover:border-black hover:bg-transparent hover:text-black transition-all">
                        Reset Form
                    </button>
                </div>
            </form>
        </div>
    )
}

export default withAuth(Form);