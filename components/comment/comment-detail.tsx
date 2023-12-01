import { CommentDataInt } from "."
import CSS from "./comment-detail.module.css"

function CommentDetail(props: { comment: CommentDataInt }) {

    const { comment} = props

    return (
        <div className={CSS.detail}>
            <div className={CSS.name}>{comment.name}</div>
            <div className={CSS.comment}>{comment.comment}</div>
        </div>
    )
}

export default CommentDetail