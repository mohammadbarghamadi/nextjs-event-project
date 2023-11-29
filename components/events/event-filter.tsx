import { FormEvent, useEffect, useState } from "react"
import CSS from "./event-filter.module.css"
import { OrderInt } from "@/pages/events/[...slug]"

export default function EventFilter(props: { setOrder: (value: OrderInt) => void }) {

    const [order, setOrder] = useState<string>()

    useEffect(() => {
        if (order === "date-asc") props.setOrder({ date: "asc" })
        else if (order === "date-dsc") props.setOrder({ date: "dsc" })
        else if (order === "price-asc") props.setOrder({ price: "asc" })
        else if (order === "price-dsc") props.setOrder({ price: "dsc" })
        else props.setOrder({ createdAt: "asc" })

    }, [order])

    return (
        <div className={CSS.select}>
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