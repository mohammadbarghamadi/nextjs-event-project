import AuthContext from "@/context/AuthContext"
import { useContext } from "react"


export default function AboutPage() {

    const { accessToken, refreshToken } = useContext(AuthContext)

    return (
        <div className="about-page">
            <div className="container">
                <p>{accessToken}</p>
                <p>{refreshToken}</p>
            </div>
        </div>
    )
}