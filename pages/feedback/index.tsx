import { FormEvent, useEffect, useState } from "react"
import { FeedbackSchema } from "@/models/feedback.model"

const Feedback = (props: { feedbacks: FeedbackSchema[] }) => {

    const { feedbacks } = props

    const [loadFeedbacks, setLoadFeedbacks] = useState()

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const [successMessage, setSuccessMessage] = useState<string>("")

    function feedbackHandler(e: FormEvent) {
        e.preventDefault()

        const sendData = async () => {
            const response = await fetch("/api/feedbacks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, description })
            })
            const { success, error, message, data } = await response.json()
            if (success && data) {
                setName("")
                setEmail("")
                setDescription("")
                setSuccessMessage("پیام شما با موفقیت ثبت شد.")
            }
        }

        sendData()
    }

    useEffect(() => {
        setTimeout(() => {
            setSuccessMessage("")
        }, 5000)
    }, [successMessage])

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
                        <label htmlFor="description">پیام</label><br />
                        <textarea name="description" id="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    </div>

                    <button>ثبت بازخورد</button>
                </form>
            </div>
            <div className="message">
                {successMessage ? successMessage : ""}
            </div>

            <div className="latest-feedbacks">
                <div className="container">
                    <br />
                    <h2>فهرست بازخوردهای دریافتی:</h2>
                    {feedbacks.length ? feedbacks.map((item, index) => <div key={index} className="feedback">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                    </div>) : ""}
                </div>
            </div>

        </div>
    )
}

export const getStaticProps = async () => {

    const getFeedbacks = await fetch("/api/feedbacks/list", { method: "GET" })
    const { success, error, data } = await getFeedbacks.json()

    if (success && data) {
        return { props: { feedbacks: data } }
    }

    return { props: { feedbacks: [] } }

}

export default Feedback