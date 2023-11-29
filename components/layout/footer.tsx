import Link from "next/link"
import Subscribe from "../subscribe"
import CSS from "./footer.module.css"
import Image from "next/image";

import Enamad from "../../public/images/enamad.png";
import SamanBank from "../../public/images/banksaman1.png";

const Footer = () => {
    return (
        <div className={CSS.footer}>
            <div className="container">
                <div className={CSS.footerContainer}>

                    <div className="foot">
                        <h3 style={{ fontSize: "22px" }}>عضویت در خبرنامه</h3>
                        <p>با عضویت در خبرنامه رویداد سیستم از آخرین اطلاعات مهم ما مطلع شوید و همیشه بروز بمانید</p>
                        <div className={CSS.subscribeInput}><Subscribe /></div>
                    </div>
                    <div className="foot">

                    </div>
                    <div className="foot">
                        <div className={CSS.logoContainer}>
                            <div className={CSS.block}>
                                <Image src={Enamad} alt="نماد الکترونیک" width={200} height={150} />
                            </div>
                            <div className={CSS.block}>
                                <Image src={SamanBank} alt="نماد بانک سامان" width={200} height={150} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={CSS.copyright}>
                <div className="container">
                    <p>کلیه حقوق مادی و معنوی <Link style={{ color: "#f0774d" }} href="/">رویداد سیستم</Link> محفوظ و مربوط به شرکت تحقیق و توسعه محمد امین می‌باشد.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer