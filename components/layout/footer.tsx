import Link from "next/link"
import Subscribe from "../subscribe"
import FooterCSS from "./footer.module.css"
import Image from "next/image";

import Enamad from "../../public/images/enamad.png";
import SamanBank from "../../public/images/banksaman1.png";

const Footer = () => {
    return (
        <div className={FooterCSS.footer}>
            <div className="container">
                <div className={FooterCSS.footerContainer}>

                    <div className="foot">
                        <h3 style={{ fontSize: "22px" }}>عضویت در خبرنامه</h3>
                        <p>با عضویت در خبرنامه رویداد سیستم از آخرین اطلاعات مهم ما مطلع شوید و همیشه بروز بمانید</p>
                        <div className={FooterCSS.subscribeInput}><Subscribe /></div>
                    </div>
                    <div className="foot">

                    </div>
                    <div className="foot">
                        <div className={FooterCSS.logoContainer}>
                            <div className={FooterCSS.block}>
                                <Image src={Enamad} alt="نماد الکترونیک" width={200} height={150} />
                            </div>
                            <div className={FooterCSS.block}>
                                <Image src={SamanBank} alt="نماد بانک سامان" width={200} height={150} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={FooterCSS.copyright}>
                <div className="container">
                    <p>کلیه حقوق مادی و معنوی <Link style={{ color: "#f0774d" }} href="/">رویداد سیستم</Link> محفوظ و مربوط به شرکت تحقیق و توسعه محمد امین می‌باشد.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer