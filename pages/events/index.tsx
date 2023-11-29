import { useState, useEffect } from "react"
import EventList from "@/components/events/event-list"
import CSS from "./slug.module.css"
import EventCSS from "./index.module.css"
import SearchEvent from "@/components/events/event-search"
import EventFilter from "@/components/events/event-filter"
import { OrderInt } from "./[...slug]"
import Head from "next/head"

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

        getEvents()
    }, [searchString, order])

    return (
        <div className={EventCSS.eventPage}>
            <Head>
                <title>کلیه رویدادها - رویداد سیستم</title>
                <meta name="description" content="برای مطلع شدن و بررسی همه رویدادها به این بخش مراجعه کنید تا کلیه رویدادهای ثبت شده در سایت را بررسی کنید" />
            </Head>
            <div className="container">
                <div className={CSS.filter}>
                    <div className={CSS.search}><SearchEvent setString={setSearchString} /></div>
                    <EventFilter setOrder={setOrder} />
                </div>
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