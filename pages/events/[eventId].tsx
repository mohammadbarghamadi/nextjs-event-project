import { EventModel } from "."
import { GetStaticProps } from "next"
import EventDetail from "@/components/events/event-detail"
import Head from "next/head"
import EventComment from "@/components/comment"
import CommentList from "@/components/comment/comment-list"
import { CommentSchema } from "@/models/comment.model"
import { getComments } from "../api/comments"

export default function SingleEventPage(props: { event: EventModel, comments: CommentSchema[] }) {
    const { event, comments } = props

    return (
        <div className="">
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.excerpt} />
            </Head>

            <EventDetail event={event} />
            <EventComment eventId={event._id} />

            {comments ? <CommentList comments={comments} /> : ""}

        </div>
    )
}

const getEvents = async function () {
    const response = await fetch("http://localhost:3030/api/event/list", { method: "GET", headers: { "Content-Type": "application/json" } })
    const { success, error, message, data } = await response.json()
    if (success && data) {
        return data as EventModel[]
    } else return []

}

export const getStaticProps: GetStaticProps = async function (contex) {
    const { params } = contex

    const eventId = params?.eventId as string

    const comments = await getComments(eventId)

    const response = await fetch(`http://localhost:3030/api/event/get/${eventId}`)
    const { success, error, message, data } = await response.json()

    if (success && data) {
        return {
            props: {
                event: data,
                comments: comments.length && JSON.parse(JSON.stringify(comments))
            },
            revalidate: 600 // seconds to regenerate pages
        }
    } else {
        return {
            notFound: true
        }
    }

}

export async function getStaticPaths(contex: any) {
    const events = await getEvents()
    const paths = events.map(item => ({ params: { eventId: item._id } }))
    return {
        paths,
        fallback: 'blocking' // true | false | 'blocking'
    }

}