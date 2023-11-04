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
import CoWorkerCSSClass from "./coworker.module.css"

export default function CoWorker() {
    return (
        <div className={CoWorkerCSSClass.iconContainer }>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faGoogle} />
            </div>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faMeta} />
            </div>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faAmazon} />
            </div>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faApple} />
            </div>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faBlogger} />
            </div>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faBitcoin} />
            </div>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faPaypal} />
            </div>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faDribbble} />
            </div>
            <div className={CoWorkerCSSClass.iconBox}>
                <FontAwesomeIcon icon={faBehance} />
            </div>
        </div>
    )
}