import UserCSSClass from "./user.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserPlus, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons"

export default function UserSign() {
    return (
        <div className={UserCSSClass.signInUp}>
            <Link className={UserCSSClass.signupBtn} href="/user/signup">
                <FontAwesomeIcon icon={faUserPlus} /> ثبت نام</Link><br />
            <Link className={UserCSSClass.signinBtn} href={"/user/signin"}>
                <FontAwesomeIcon icon={faArrowRightToBracket} /> ورود</Link>
        </div>
    )
}