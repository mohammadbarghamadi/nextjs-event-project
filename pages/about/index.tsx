import AuthContext from "@/context/AuthContext"
import Head from "next/head"
import { useContext } from "react"


export default function AboutPage() {

    const { accessToken, refreshToken } = useContext(AuthContext)

    return (
        <div className="about-page">
            <Head>
                <title>درباره رویداد سیستم</title>
                <meta name="description" content="برای آشنایی بیشتر با رویداد سیستم محتوای این صفحه را بخوانید و از آشنایی با این سیستم  لذت ببرید" />
            </Head>
            <div className="container">
                <p>{accessToken}</p>
                <p>{refreshToken}</p>
            </div>
        </div>
    )
}