import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faCalendarDays, faAddressCard } from "@fortawesome/free-solid-svg-icons"

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link href="/"><FontAwesomeIcon icon={faHome} /> صفحه اصلی</Link></li>
                <li><Link href="/events"><FontAwesomeIcon icon={faCalendarDays} /> رویدادها</Link></li>
                <li><Link href="/about"><FontAwesomeIcon icon={faAddressCard} /> درباره ما</Link></li>
            </ul>
        </nav>
    )
}