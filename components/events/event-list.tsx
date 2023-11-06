
import { EventModel } from "@/pages/events"
import EventBox from "./event-summery"
import EventCssClass from "./eventList.module.css"

export default function EventList(props: { events: EventModel[] }) {

    const {events} = props

    function eventHandler() {
        return events.map(item => {
            return (<EventBox key={item._id} event={item}/>)
        })
    }

    return (
        <div className={EventCssClass.eventGrid}>
            {eventHandler()}
        </div>
    )
}


