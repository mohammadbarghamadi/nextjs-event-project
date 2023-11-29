import { CommentDataInt } from "."


function CommentDetail(props: { comment: CommentDataInt }) {

    const { comment} = props

    return (
        <div className="comment-detail">
            <div className="name">{comment.name}</div>
            <div className="comment">{comment.comment}</div>
            <button>پاسخ به {comment.name}</button>
        </div>
    )
}

export default CommentDetail