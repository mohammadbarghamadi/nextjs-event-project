import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CSS from "./logo.module.css";
import Link from "next/link";


export default function Logo() {
    return (
        <div className={CSS.logo}>
            <Link href={'/'}>
                رویداد سیستم
            </Link>
        </div>
    )
}