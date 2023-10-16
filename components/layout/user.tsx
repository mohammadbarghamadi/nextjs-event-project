import Link from "next/link"

export default function UserSign() {
    return (
        <div className="signin-signup">
            <Link href="/user/signup">ثبت نام</Link><br/>
            <Link href={"/user/signin"}>ورود</Link>
        </div>
    )
}