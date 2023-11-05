import AuthContext from "@/context/AuthContext"
import { useContext, useEffect, useState } from "react"

interface CategoryModel {
    name: string,
    slug: string,
    _id: string,
    __v: number
}

export default function SelectCategory(props: { setCategoryId: (value: string) => void, categoryId: string }) {

    const { setCategoryId, categoryId } = props

    const [categories, setCategories] = useState<CategoryModel[]>()
    const [disabledOption, setDisabledOption] = useState<boolean>(false)

    async function getCategories() {

        const response = await fetch(`http://localhost:3030/api/category/list`, { method: "GET" })
        const { success, error, message, data } = await response.json()

        if (success && data) {
            setCategories(data)
        } else if (!success || error || message) {
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        setDisabledOption(true)
    }, [])

    function categoryHandler() {
        if (categories && categories.length) {
            return categories.map(item => {
                return (
                    <option key={item._id} value={item._id}>{item.name}</option>
                )
            })
        }
    }

    return (
        <select id="category" onChange={e => setCategoryId(e.target.value)}>
            <option disabled={disabledOption} value="">انتخاب کنید</option>
            {categoryHandler()}
        </select>
    )
}