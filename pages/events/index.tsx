import EventList from "@/components/events/event-list"

export interface EventModel {
    title: string,
    excerpt?: string,
    description: string,
    image: {
        _id: string,
        name: string,
        filepath: string,
        size: number,
        encoding: string,
        md5: string,
        mimetype: string,
        owner: string,
    },
    video?: string,
    date: string,
    duration: number,
    price: number,
    location?: {
        country: string,
        state: string,
        city: string,
        address: string
    },
    category: [{
        name: string,
        url: string,
    }],
    featured: boolean,
    owner: {
        name: string
    }
    _id: string,
    __v: number,
    createdAt: string,
    updatedAt: string
}

export default function EventsPage(props: { events: EventModel[] }) {

    const { events } = props

    return (
        <div className="events-page">
            <div className="container">
                <EventList events={events} />
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const response = await fetch('http://localhost:3030/api/event/list', { method: "GET" })
    const { success, error, message, data } = await response.json()

    if (success && data) {
        return {
            props: { events: data }
        }
    } else if (!success || error || message) {
        return {
            props: { events: [] }
        }
    }

}