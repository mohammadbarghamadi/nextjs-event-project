import { GetServerSideProps } from "next"
import { EventModel } from "."
import EventList from "@/components/events/event-list"
import SearchEvent from "@/components/events/event-search"
import EventFilter from "@/components/events/event-filter"
import SlugCSS from "./slug.module.css"
import { useEffect, useState } from "react"

export default function EventArchive(props: { events: EventModel[] }) {

    const [searchString, setSearchString] = useState<string>()
    const [events, setEvents] = useState<EventModel[]>(props.events)

    useEffect(() => {

        const getEvents = async () => {
            const response = await fetch(`http://localhost:3030/api/event/list/?keyphrase=${searchString}`, { method: "GET", headers: { "Content-Type": "application/json" } })
            const { success, error, message, data } = await response.json()
            
            if (success && data) {
                setEvents(data)
            }
        }

        if (searchString) getEvents()

    }, [searchString])

    return (
        <div className={SlugCSS.slugPage}>
            <div className="container">
                <div className={SlugCSS.filter}>
                    <div className={SlugCSS.search}><SearchEvent setString={setSearchString} /></div>
                    <EventFilter />
                </div>
                <EventList events={events} />
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (contex) => {
    const { params } = contex

    if (params) {

        const response = await fetch("http://localhost:3030/api/event/list", { method: "GET", headers: { 'Contet-Type': 'application/json' } })
        const { success, error, message, data } = await response.json()


        if (!success || error || message) {
            return {
                notFound: true
            }
        }

        else if (success && data) {
            return {
                props: {
                    events: data
                }
            }
        }
    }

    return {
        notFound: true
    }

}