import { GetServerSideProps } from "next"
import { EventModel } from "."
import EventList from "@/components/events/event-list"
import SearchEvent from "@/components/events/event-search"
import EventFilter from "@/components/events/event-filter"
import SlugCSS from "./slug.module.css"
import { useEffect, useState } from "react"
import Head from "next/head"

export interface OrderInt {
    date?: "asc" | "dsc"
    price?: "asc" | "dsc"
    createdAt?: "asc" | "dsc"
}

export default function EventArchive(props: { events: EventModel[] }) {

    const [searchString, setSearchString] = useState<string>()
    const [order, setOrder] = useState<OrderInt>()
    const [events, setEvents] = useState<EventModel[]>(props.events)

    useEffect(() => {

        const getEvents = async () => {

            const url = "http://localhost:3030/api/event/list?"
            const keyphrase = searchString ? `keyphrase=${searchString}` : ""
            const dateOrder = order?.date ? `&date=${order.date}` : ""
            const priceOrder = order?.price ? `&price=${order.price}` : ""

            const response = await fetch(`${url}${keyphrase}${dateOrder}${priceOrder}`, { method: "GET", headers: { "Content-Type": "application/json" } })
            const { success, error, message, data } = await response.json()

            if (success && data) {
                setEvents(data)
            }
        }

        if (searchString) getEvents()
        if (order) getEvents()

    }, [searchString,order])

    return (
        <div className={SlugCSS.slugPage}>
            <Head>
                <title>همه رویدادها - رویداد سیستم</title>
                <meta name="description" content="بررسی کلیه رویدادها و  توانایی در جستجو و نظم بندی رویدادها با  عنوان و نوع رویداد" />
            </Head>
            <div className="container">
                <div className={SlugCSS.filter}>
                    <div className={SlugCSS.search}><SearchEvent setString={setSearchString} /></div>
                    <EventFilter setOrder={setOrder} />
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