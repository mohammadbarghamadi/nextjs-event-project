import { CommentModel } from "@/pages/api/comment"
import CommentDetail from "./comment-detail"
import CSS from "./comment-list.module.css"

function CommentList(props: { comments: CommentModel[] }) {

    const { comments } = props

    return (
        <div className={CSS.list}>
            <div className="container">
                {comments.map(comment => <CommentDetail key={comment._id} comment={comment} />)}
            </div>
        </div>
    )
}

export default CommentList