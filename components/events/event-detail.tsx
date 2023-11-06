import { EventModel } from "@/pages/events";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendar,
    faClock,
    faAt,
    faMapLocationDot,
    faHourglassStart,
    faTags,
    faDollar,
    faUser,
    faLocationDot

} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import EventDetailCSSClass from "./eventDetail.module.css"

export default function EventDetail(props: { event: EventModel }) {
    const { event } = props

    console.log(event)

    const runningDate = (new Date(event.date)).toLocaleDateString()
    const runningTime = (new Date(event.date)).toLocaleTimeString()

    function priceHandler() {
        if (!event.price) return "رایگان"
        else return (
            <>
                <span>{event.price}</span> <span>تومان</span>
            </>
        )
    }

    function categoryHandler() {
        return event.category.map(item => {
            return (
                <Link href={'/events/cat/' + item.url}>{item.name}</Link>
            )
        })
    }

    function locationHandler() {
        if (event.location && event.location.country && event.location.state) {
            const { country, state, city, address } = event.location
            return (
                <div className="location">
                    <FontAwesomeIcon icon={faLocationDot} /> <span>محل سمینار: </span>
                    <span>{country}</span> / <span>{state}</span> / <span>{city}</span> / <span>{address}</span>
                </div>
            )
        }
        return null
    }

    return (
        <div className={EventDetailCSSClass.event}>
            <div className="container">

                <div className={EventDetailCSSClass.intro}>
                    <div className={EventDetailCSSClass.eventImage}>
                        <picture>
                            <img src={"/" + event.image.filepath} alt={event.title} />
                        </picture>
                    </div>
                    <div className={EventDetailCSSClass.info}>

                        <div className={EventDetailCSSClass.infoContainer}>
                            <div className="date">
                                <FontAwesomeIcon icon={faCalendar} color="#00ADB5" />
                                <span style={{ color: '#222', fontWeight: 700 }}> تاریخ برگذاری: </span>
                                <span style={{ color: '#777777' }}>{runningDate}</span>
                            </div>
                            <div className="time">
                                <FontAwesomeIcon icon={faClock} color="#00ADB5" />
                                <span style={{ color: '#222', fontWeight: 700 }}> ساعت شروع: </span>
                                <span style={{ color: '#777777' }}>{runningTime}</span>
                            </div>

                            <div className="time">
                                <FontAwesomeIcon icon={faHourglassStart} color="#00ADB5" />
                                <span style={{ color: '#222', fontWeight: 700 }}> مدت زمان رویداد: </span>
                                <span style={{ color: '#777777' }}>{event.duration} </span>
                                <time> دقیقه</time>
                            </div>

                            <div className="price">
                                <FontAwesomeIcon icon={faDollar} color="#00ADB5" />
                                <span style={{ color: '#222', fontWeight: 700 }}> قیمت بلیط: </span>
                                <span style={{ color: '#777777' }}>{priceHandler()}</span>
                            </div>

                            <div className="owner">
                                <FontAwesomeIcon icon={faUser} color="#00ADB5" />
                                <span style={{ color: '#222', fontWeight: 700 }}> برگذار کننده: </span>
                                <span style={{ color: '#777777' }}>{event.owner.name}</span>
                            </div>

                            <div className="categories">
                                <FontAwesomeIcon icon={faTags} color="#00ADB5" />
                                <span style={{ color: '#222', fontWeight: 700 }}> دسته بندی: </span>
                                <span style={{ color: '#777777' }}>{categoryHandler()}</span>
                            </div>

                            {locationHandler()}
                        </div>

                    </div>
                </div>

                <div className={EventDetailCSSClass.eventContent}>
                    <h1>{event.title}</h1>
                    <p>{event.description}</p>
                </div>

            </div>
        </div>
    )
}