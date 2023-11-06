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

export default function EventDetail(props: { event: EventModel }) {
    const { event } = props

    console.log(event)

    const runningDate = (new Date(event.date)).toLocaleDateString()
    const runningTime = (new Date(event.date)).toLocaleTimeString()

    return (
        <div className="">
            <div className="container">

                <div className="intro">
                    <div className="event-image">
                        <picture>
                            <img src={"/" + event.image.filepath} alt={event.title} />
                        </picture>
                    </div>
                </div>

                <div className="running-date">
                    <div className="date">
                        <FontAwesomeIcon icon={faCalendar} /> تاریخ برگذاری: <span>{runningDate}</span>
                    </div>
                    <div className="time">
                        <FontAwesomeIcon icon={faClock} /> ساعت شروع: <span>{runningTime}</span>
                    </div>
                </div>

                <div className="time">
                    <FontAwesomeIcon icon={faHourglassStart} /> مدت زمان رویداد: <span>{event.duration}</span> <time>دقیقه</time>
                </div>


                <div className="content">
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                </div>

            </div>
        </div>
    )
}