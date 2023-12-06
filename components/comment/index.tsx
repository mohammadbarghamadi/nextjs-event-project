import { useEffect, useState } from "react"
import CommentForm from "./comment-form"
import CSS from "./index.module.css"

export interface CommentDataInt {
    name: string
    email: string
    comment: string
}

function EventComment(props: { eventId: string }) {

    const { eventId } = props
    const [commentData, setCommentData] = useState<CommentDataInt>()

    useEffect(() => {
        async function submitComment() {
            const response = await fetch('/api/comments', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ eventId, ...commentData })
            })
            const { success, error, data } = await response.json()

        }
        if (commentData) submitComment()
    }, [commentData])

    return (
        <div className={CSS.comment}>
            <div className="container">
                <CommentForm setCommentData={setCommentData} />
            </div>
        </div>
    )
}

export default EventComment