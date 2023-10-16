import { FormEvent, useEffect, useState } from "react";

import { SignUpFormData } from "@/pages/user/signup";
type FormData = (formData: SignUpFormData) => void;

export default function SignUpForm({ formData }: { formData: FormData }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const [requiredFields, setRequiredFields] = useState(false);
    const [formDisabled, setFormDisabled] = useState(true)

    function formHandler(event: FormEvent) {
        event.preventDefault();
        formData({ name, email, phone, password })
    }

    // check if the password and its confirm is match
    useEffect(() => {
        if (password === confirm) setIsPasswordMatch(true);
        else setIsPasswordMatch(false);
    }, [password, confirm]);

    // check if all required field is entered
    useEffect(() => {
        if (name && email && phone && password && confirm) setRequiredFields(true)
        else setRequiredFields(false)
    }, [name, email, phone, password, confirm])

    // check if user can press on submit
    useEffect(() => {
        if (requiredFields && isPasswordMatch) setFormDisabled(false)
        else setFormDisabled(true)
    }, [isPasswordMatch, requiredFields])

    return (
        <form onSubmit={formHandler}>

            <div className="input-controller">
                <label htmlFor="fname">نام و نام خانوادگی</label><br />
                <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Barghamadi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="off"
                />
            </div>

            <div className="input-controller">
                <label htmlFor="email">ایمیل</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="mb.merndev@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                />
            </div>

            <div className="input-controller">
                <label htmlFor="phone">موبایل</label><br />
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="09304551004"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    autoComplete="off"
                />
            </div>

            <div className="input-group">
                <div className="input-controller">
                    <label htmlFor="password">رمز عبور</label><br />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="input-controller">
                    <label htmlFor="confirm">تکرار رمز</label><br />
                    <input
                        type="password"
                        id="confirm"
                        name="confirm"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        required
                        autoComplete="off"
                    />
                </div>
            </div>

            <div className="input-controller">
                <button disabled={formDisabled}>ثبت نام</button>
            </div>

        </form>
    )
}