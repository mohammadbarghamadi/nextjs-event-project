import { useState } from "react"
import SelectCountry from "./location/country"

import { CountryModel } from "@/pages/events/create"

export default function CreateEventForm({ countries }: { countries: CountryModel[] }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [video, setVideo] = useState("")
    const [date, setDate] = useState("")
    const [price, setPrice] = useState("")
    const [country, setCountry] = useState("")

    return (
        <form action="">

            <div className="input-controller">
                <label htmlFor="title">عنوان:</label><br />
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="عنوان رویداد"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
            </div>

            <div className="input-controller">
                <label htmlFor="description">توضیحات</label><br />
                <textarea
                    name="description"
                    id="description"
                    placeholder="توضیحات کامل رویداد خود را در این بخش بنویسید"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                >
                </textarea>
            </div>

            <div className="input-controller">
                <label htmlFor="image">عکس</label><br />
                <input
                    name="image"
                    id="image"
                    type="file"
                    accept="image/jpeg"
                    onChange={e => setImage(e.target.value)}
                />
            </div>

            <div className="input-controller">
                <label htmlFor="video">فیلم معرفی</label><br />
                <input
                    name="video"
                    id="video"
                    type="file"
                    accept="video/mp4"
                    onChange={e => setVideo(e.target.value)}
                />
            </div>

            <div className="input-controller">
                <label htmlFor="date">تاریخ برگذاری</label><br />
                <input
                    name="date"
                    id="date"
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
            </div>

            <div className="input-controller">
                <label htmlFor="price">قیمت</label><br />
                <input
                    name="price"
                    id="price"
                    type="number"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                />
            </div>

            <div className="input-group">
                <div className="input-controller">
                    <label htmlFor="country">کشور</label><br />
                    <SelectCountry countries={countries} />
                </div>

            </div>


        </form>
    )
}

