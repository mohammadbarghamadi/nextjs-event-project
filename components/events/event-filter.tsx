import { FormEvent, useEffect, useState } from "react"
import FilterCSS from "./eventFilter.module.css"


export default function EventFilter() {

    const [order, setOrder] = useState("")

    useEffect(() => {
        console.log(order)
    }, [order])

    return (
        <div className={FilterCSS.select}>
            <select name="sort" id="sort" defaultValue={"Default"} onChange={e => setOrder(e.target.value)}>
                <option value="Default" disabled={true}>نمایش بر اساس</option>
                <option value="date-asc">تاریخ صعودی</option>
                <option value="date-dsc">تاریخ نزولی</option>
                <option value="price-asc">قیمت صعودی</option>
                <option value="price-dsc">قیمت نزولی</option>
            </select>
        </div>
    )
}