import CSS from "./index.module.css"
import EventSearch from "./search"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faTheRedYeti } from "@fortawesome/free-brands-svg-icons"

export default function HeroSection() {
    return (
        <>
            <div className={CSS.heroSection}>
                <div className={CSS.content}>
                    <h2>دنیا را با اشتراک گذاری تجربه های آنلاین به دور خود جمع کنید</h2>
                    {/* <EventSearch /> */}
                    <p>با ایجاد رویداد آنلاین در رویداد سیستم در هر زمینه ای میتوانید افراد را از کشورها و شهر های مختلف دنیا به دور خود جمع کنید </p>
                    <Link href={'/events/create'}>
                        <FontAwesomeIcon icon={faPlus} /> ایجاد رویداد
                    </Link>
                </div>
                <div className={CSS.image}>
                    <FontAwesomeIcon icon={faTheRedYeti} shake bounce />
                </div>
            </div>
        </>
    )
}