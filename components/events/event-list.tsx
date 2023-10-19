
import { EventModel } from "@/pages/events"
import EventDetail from "./event-detail"

export default function EventList(props: { events: EventModel[] }) {

    const {events} = props

    function eventHandler() {
        return events.map(item => {
            return (<EventDetail key={item._id} event={item}/>)
        })
    }

    return (
        <div className="list-event-grid">
            {eventHandler()}
        </div>
    )
}


