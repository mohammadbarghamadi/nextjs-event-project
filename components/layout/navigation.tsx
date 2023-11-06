import NavCSSClass from "./navigation.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faCalendarDays, faAddressCard, faPlus } from "@fortawesome/free-solid-svg-icons"

export default function Navigation() {
    return (
        <nav className={NavCSSClass.nav}>
            <ul className={NavCSSClass.ul}>
                <li><Link href="/"><FontAwesomeIcon icon={faHome} /> صفحه اصلی</Link></li>
                <li><Link href="/events"><FontAwesomeIcon icon={faCalendarDays} /> رویدادها</Link></li>
                <li><Link href="/about"><FontAwesomeIcon icon={faAddressCard} /> درباره ما</Link></li>
                <li> <Link style={{ backgroundColor: '#f5f5f5', color: '#333' }} href={"/events/create"}>
                    <FontAwesomeIcon icon={faPlus} /> ایجاد رویداد</Link></li>
            </ul>
        </nav>
    )
}