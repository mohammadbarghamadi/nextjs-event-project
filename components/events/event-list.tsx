
import { EventModel } from "@/pages/events"
import EventBox from "./event-summery"

export default function EventList(props: { events: EventModel[] }) {

    const {events} = props

    function eventHandler() {
        return events.map(item => {
            return (<EventBox key={item._id} event={item}/>)
        })
    }

    return (
        <div className="list-event-grid">
            {eventHandler()}
        </div>
    )
}


