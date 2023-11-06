import eventCSSClass from "./event.module.css"
import { EventModel } from "@/pages/events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faClock,
    faAt,
    faMapLocationDot,
    faHourglassStart,
    faTags,

} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function EventBox({ event }: { event: EventModel }) {
    const {
        _id, category, createdAt, date, duration, featured
        , image, owner, price, title, excerpt
    } = event

    function categoryHandler() {
        return category.map(item => {
            return (
                <span key={item.url}><Link href={`/events/cats/${item.url}`}>{item.name}</Link></span>
            )
        })
    }

    function featuredHandler() {
        if (event.featured) {
            return (
                <div style={{ position: 'absolute', width: '100px', textAlign: 'center', left: '0px', top: '0px', background: '#00ADB5' }}>
                    <span style={{ color: '#fff' }}>ویژه</span>
                </div>
            )
        }
    }

    return (
        <div key={_id} className={eventCSSClass.eventSummery}>
            <div className="image-box">
                <picture>
                    <Link href={`/events/${_id}`}>
                        <img src={`/${image.filepath}`} alt="" />
                    </Link>
                </picture>
                {featuredHandler()}
            </div>
            <div className={eventCSSClass.contentBox}>
                <div className="event-title">
                    <Link href={`/events/${_id}`}>
                        <h3>{title}</h3>
                    </Link>
                </div>

                <div className="event-detail">
                    <p>{excerpt}</p>
                </div>

                <div className="event-meta">
                    <div className="author">
                        <FontAwesomeIcon icon={faAt} /> مالک: {owner.name}
                    </div>
                    <div className="date">
                        <FontAwesomeIcon icon={faCalendar} /> تاریخ: {(new Date(date)).toLocaleString()}
                    </div>
                    <div className="duration">
                        <FontAwesomeIcon icon={faClock} /> زمان: {duration} دقیقه
                    </div>
                    <div className="category">
                        <FontAwesomeIcon icon={faTags} />  دسته: {categoryHandler()}
                    </div>
                </div>

            </div>
        </div>
    )
}