import { FormEvent, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import SearchCSS from "./eventSearch.module.css"

export default function SearchEvent(props: { setString: (string: string) => void }) {

    const { setString } = props

    const [search, setSearch] = useState<string>("")

    function formHanlder(e: FormEvent) {
        e.preventDefault()
        setString(search)
    }

    return (
        <form onSubmit={formHanlder}>
            <div className={SearchCSS.searchInput}>
                <input
                    name="search"
                    id="search"
                    type="text"
                    placeholder="عنوان رویداد"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button><FontAwesomeIcon icon={faSearch} /> جستجو</button>
            </div>
        </form>
    )
}