import { getComments } from "@/pages/api/comment/list"
import { useState } from "react"
import { GetStaticProps } from "next"
import { CommentModel } from "@/pages/api/comment"
import CommentDetail from "./comment-detail"

function CommentList(props: { comments: CommentModel[] }) {

    const { comments } = props

    return (
        <div className="comments-list">
            <div className="container">
                {comments.map(comment => <CommentDetail key={comment._id} comment={comment} />)}
            </div>
        </div>
    )
}

export default CommentList