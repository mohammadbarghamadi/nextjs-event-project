import { FormEvent, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import SearchCSS from "./eventSearch.module.css"

export default function SearchEvent() {

    const [search, setSearch] = useState<string>("")

    function formHanlder(e: FormEvent) {
        e.preventDefault()
    }

    return (
        <form onSubmit={formHanlder}>
            <div className={SearchCSS.searchInput}>
            <input
                name="search"
                id="search"
                type="text"
                placeholder="نام رویداد"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button><FontAwesomeIcon icon={faSearch}/> جستجوی رویداد</button>
            </div>
        </form>
    )
}