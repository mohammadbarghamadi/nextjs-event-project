import { useState, useEffect, FormEvent } from "react";

import { SignInFormData } from "@/pages/user/signin";
type FormData = ({ email, phone, password }: SignInFormData) => void

export default function SignInForm({ formData }: { formData: FormData }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [formDisabled, setFormDisabled] = useState(true);

    // check if both username and password is entred
    useEffect(() => {
        if (username && password) setFormDisabled(false);
        else setFormDisabled(true);
    }, [username, password])

    // handle form
    function formHandler(event: FormEvent) {
        event.preventDefault();

        if (username.includes("@") && username.includes("."))
            formData({ email: username, phone: "", password })
        else if (typeof (parseInt(username)) === "number")
            formData({ email: "", phone: username, password })
    }

    return (
        <form onSubmit={formHandler}>
            <div className="input-controller">
                <label htmlFor="username">نام کاربری</label><br />
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Email / Phone"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="input-controller">
                <label htmlFor="password">رمز عبور</label><br />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-controller">
                <button disabled={formDisabled}>ورود</button>
            </div>
        </form>
    )
}