import { useState } from "react";

const DEFAULT_DATA = {
    setup: "",
    punchline: "",
}

const Form = () =>{
    const [form, setForm] = useState(DEFAULT_DATA);

    function handleChange() {
        alert("test")
    }

    function submitForm() {
        alert("test")
    }

    function resetForm() {
        alert("test")
    }

    return(
        <div className="shadow p-8">
                <h2>Submit Joke</h2>
                <form className="mt-5 flex flex-col gap-5">
                    <div className="form-group flex flex-col gap-3">
                        <label htmlFor="setup">Setup</label>
                        <input type="text" name="setup" id="setup" required value={form.setup} onChange={handleChange} className="outline outline-1 rounded px-2 py-4 h-12" />
                    </div>

                    <div className="form-group flex flex-col gap-3">
                        <label htmlFor="punchline">Punchline</label>
                        <textarea type="textarea" name="punchline" id="punchline" required  value={form.punchline} onChange={handleChange} className="outline outline-1 align-top rounded px-2 py-4 h-24" />
                    </div>

                    <div className="action">
                        <button type="button" onClick={submitForm} className="status detail-btn">
                            Submit
                        </button>
                        <button type="button" onClick={resetForm} className="status detail-btn ml-5">
                            Reset Form
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default Form;