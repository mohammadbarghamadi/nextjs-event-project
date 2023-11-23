import { GetServerSideProps } from "next"
import { EventModel } from "."
import EventList from "@/components/events/event-list"
import SearchEvent from "@/components/events/event-search"
import EventFilter from "@/components/events/event-filter"
import SlugCSS from "./slug.module.css"

export default function EventArchive(props: { events: EventModel[] }) {


    return (
        <div className={SlugCSS.slugPage}>
            <div className="container">
                <div className={SlugCSS.filter}>
                    <div className={SlugCSS.search}><SearchEvent /></div>
                    <EventFilter />
                </div>
                {EventList(props)}
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