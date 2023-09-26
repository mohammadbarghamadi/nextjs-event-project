import Logo from "./logo"
import Navigation from "./navigation"
import UserSign from "./user"

export default function Header() {
    return (
        <header>
            <div className="container">
                <Logo/>
                <Navigation/>
                <UserSign/>
            </div>
        </header>
    )
}