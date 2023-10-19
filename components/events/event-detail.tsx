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

export default function EventDetail({ event }: { event: EventModel }) {
    const {
        __v, _id, category, createdAt, date, description, duration, featured
        , image, owner, price, title, updatedAt, excerpt, location, video
    } = event 

    function categoryHandler() {
        return category.map(item => {
            return (
                <span key={item.url}><Link href={`/events/cats/${item.url}`}>{item.name}</Link></span>
            )
        })
    }

    return (
        <div key={_id} className="event-detail">
            <div className="image-box">
                <picture>
                    <img src={`/${image.filepath}`} alt="" />
                </picture>
            </div>
            <div className="content-box">
                <div className="event-title">
                    <h1>{title}</h1>
                </div>

                <div className="event-meta">
                    <div className="author">
                        <FontAwesomeIcon icon={faAt} />:
                        {owner.name}
                    </div>
                    <div className="date">
                        <FontAwesomeIcon icon={faCalendar} />:
                        {(new Date(date)).toLocaleString()}
                    </div>
                    <div className="duration">
                        <FontAwesomeIcon icon={faClock} />:
                        {duration}
                    </div>
                    <div className="category">
                        <FontAwesomeIcon icon={faTags} />:
                        {categoryHandler()}
                    </div>
                </div>

                <div className="event-detail">
                    <p>{description}</p>
                </div>

            </div>
        </div>
    )
}