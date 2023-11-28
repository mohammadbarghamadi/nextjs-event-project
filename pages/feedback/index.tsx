import { FormEvent, useState } from "react"
import { readWroteFeedbacks } from "../api/feedbacks/feedback"

const Feedback = (props: { feedbacks: { name: string, email: string, message: string }[] }) => {

    const { feedbacks } = props

    const [loadFeedbacks, setLoadFeedbacks] = useState()

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    function feedbackHandler(e: FormEvent) {
        e.preventDefault()

        const sendData = async () => {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message })
            })
            const data = await response.json()
        }

        sendData()

    }

    return (
        <div className="feedback">
            <div className="container">

                <form onSubmit={feedbackHandler}>

                    <div className="input-controller">
                        <label htmlFor="name">نام</label><br />
                        <input name="name" id="name" type="text" value={name} onChange={e => (setName(e.target.value))} required />
                    </div>

                    <div className="input-controller">
                        <label htmlFor="email">ایمیل</label><br />
                        <input name="email" id="email" type="email" value={email} onChange={e => (setEmail(e.target.value))} required />
                    </div>

                    <div className="input-controller">
                        <label htmlFor="message">نام</label><br />
                        <textarea name="message" id="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>

                    <button>ثبت بازخورد</button>
                </form>
            </div>

            <div className="latest-feedbacks">
                <div className="container">
                    <br />
                    <h2>فهرست بازخوردهای دریافتی:</h2>
                    {feedbacks.map((item, index) => <div key={index} className="feedback">
                        <h4>{item.name}</h4>
                        <p>{item.message}</p>
                    </div>)}
                </div>
            </div>

        </div>
    )
}

export const getStaticProps = async () => {
    const { feedbacks } = await readWroteFeedbacks()
    return { props: { feedbacks } }
}

export default Feedback