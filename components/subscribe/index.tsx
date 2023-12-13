import { FormEvent, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import CSS from "./index.module.css"

const Subscribe = () => {

    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")

    function formHandler(e: FormEvent) {
        e.preventDefault()
        async function subscribe() {
            const response = await fetch("/api/subscriber", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email })
            })
            const { success, error, message, data } = await response.json()
            if (success && data) {
                setEmail("")
                setName("")
                
            }
        }
        subscribe()
    }

    return (
        <form className={CSS.subscribe} onSubmit={formHandler}>
            <div className={CSS.inputName}>
                <input
                    type="text"
                    id="name"
                    placeholder="نام"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className={CSS.inputEmail}>
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