
import { EventModel } from "@/pages/events"
import EventBox from "./event-summery"
import CSS from "./event-list.module.css"

export default function EventList(props: { events: EventModel[] }) {

    const {events} = props

    function eventHandler() {
        return events.map(item => {
            return (<EventBox key={item._id} event={item}/>)
        })
    }

    return (
        <div className={CSS.eventGrid}>
            {eventHandler()}
        </div>
    )
}


