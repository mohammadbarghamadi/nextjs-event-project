import HeaderCSSClass from "./header.module.css";
import Logo from "./logo";
import Navigation from "./navigation";
import UserSign from "./user";

export default function Header() {
    return (
        <header className={HeaderCSSClass.header}>
            <div className="container">
                <div className={HeaderCSSClass.headerContainer}>
                    <Logo />
                    <Navigation />
                    <UserSign />
                </div>
            </div>
        </header>
    )
}