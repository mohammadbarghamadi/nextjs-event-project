import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faGoogle,
    faMeta,
    faAmazon,
    faYoutube,
    faApple,
    faBlogger,
    faBitcoin,
    faBehance,
    faDribbble,
    faPaypal
} from "@fortawesome/free-brands-svg-icons"
import CSS from "./coworker.module.css"

export default function CoWorker() {
    return (
        <div className={CSS.iconContainer }>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faGoogle} />
            </div>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faMeta} />
            </div>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faAmazon} />
            </div>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faApple} />
            </div>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faBlogger} />
            </div>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faBitcoin} />
            </div>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faPaypal} />
            </div>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faDribbble} />
            </div>
            <div className={CSS.iconBox}>
                <FontAwesomeIcon icon={faBehance} />
            </div>
        </div>
    )
}