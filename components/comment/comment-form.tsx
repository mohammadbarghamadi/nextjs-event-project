import { FormEvent, useState } from "react"
import { CommentDataInt } from "."
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import CSS from "./comment-form.module.css"

function CommentForm(props: { setCommentData: (comment: CommentDataInt) => void }) {

    const { setCommentData } = props

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [comment, setComment] = useState<string>("")

    function formHandler(event: FormEvent) {
        event.preventDefault()
        const commentData = { name, email, comment }
        setCommentData(commentData)
    }

    return (
        <div className={CSS.comment}>
            <form action="" onSubmit={formHandler}>

                <div className={CSS.inputGroup}>

                    <div className={CSS.inputController}>
                        <label htmlFor="name">نام</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="محمد برغمدی"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className={CSS.inputController}>
                        <label htmlFor="email">ایمیل</label>
                        <input
                            style={{direction:"ltr"}}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="mohammadbarghamadi@gmail.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={CSS.inputController}>
                    <label htmlFor="comment">دیدگاه</label>
                    <textarea
                        name="comment"
                        id="comment"
                        placeholder="دیدگاه خود را بنویسید"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        required
                    >
                    </textarea>

                </div>

                <button><FontAwesomeIcon icon={faComment}/> ثبت دیدگاه</button>

            </form>
        </div>
    )
}

export default CommentForm