import { EventModel } from "."
import { GetStaticProps } from "next"
import EventDetail from "@/components/events/event-detail"
import Head from "next/head"
import EventComment from "@/components/comment"
import CommentList from "@/components/comment/comment-list"
import { getComments } from "../api/comment/list"
import { CommentModel } from "../api/comment"

export default function SingleEventPage(props: { event: EventModel, comments: CommentModel[] }) {
    const { event, comments } = props
    return (
        <div className="">
            <Head>
                <title>{event.title}</title>
                <meta name="description" content={event.excerpt} />
            </Head>

            <EventDetail event={event} />
            <EventComment commentId={event._id} />

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

    const comments = await getComments() // get comments

    const relativeComments = comments.filter(item => item.commentId === params?.eventId)

    const response = await fetch(`http://localhost:3030/api/event/get/${params?.eventId}`)
    const { success, error, message, data } = await response.json()
    if (success && data) {
        return {
            props: {
                event: data,
                comments: relativeComments.length && relativeComments
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