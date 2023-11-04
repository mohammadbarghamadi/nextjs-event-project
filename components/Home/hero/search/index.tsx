import { FormEvent, useState } from "react"
import SearchCSSClass from "./search.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function EventSearch() {

    const [search, setSearch] = useState<string>("")

    function searchHandler(event: FormEvent) {
        event.preventDefault()

    }

    return (
        <div className={SearchCSSClass.search}>
            <form action="" onSubmit={searchHandler}>
                <div className={SearchCSSClass.inputGroup}>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="جستجوی رویداد"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            </form>
        </div>
    )
}