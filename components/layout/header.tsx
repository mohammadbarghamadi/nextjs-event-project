import CSS from "./header.module.css";
import Logo from "./logo";
import Navigation from "./navigation";
import UserSign from "./user";

export default function Header() {
    return (
        <header className={CSS.header}>
            <div className="container">
                <div className={CSS.headerContainer}>
                    <Logo />
                    <Navigation />
                    <UserSign />
                </div>
            </div>
        </header>
    )
}