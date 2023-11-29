import { FormEvent, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import CSS from "./index.module.css"

const Subscribe = () => {

    const [email, setEmail] = useState<string>("")

    function formHandler(e: FormEvent) {
        e.preventDefault()
        async function subscribe() {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email })
            })
            const data = await response.json()
            console.log(data)
        }
        subscribe()
    }

    return (
        <form className={CSS.subscribe} onSubmit={formHandler}>
            <div className="input-controller">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="آدرس ایمیل"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>
            <button><FontAwesomeIcon icon={faPaperPlane} /></button>
        </form>
    )
}

export default Subscribe