import { use, useEffect, useState } from "react"
import CommentForm from "./comment-form"
import CSS from "./index.module.css"

export interface CommentDataInt {
    name: string
    email: string
    comment: string
}

function EventComment(props: { commentId: string }) {

    const { commentId } = props
    const [commentData, setCommentData] = useState<CommentDataInt>()

    useEffect(() => {
        async function submitComment() {
            const response = await fetch('/api/comment', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ commentId, ...commentData })
            })
            const data = await response.json()
            console.log(data)
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