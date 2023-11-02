import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoCSSClass from "./logo.module.css";
import Link from "next/link";


export default function Logo() {
    return (
        <div className={LogoCSSClass.logo}>
            <Link href={'/'}>
                رویداد سیستم
            </Link>
        </div>
    )
}