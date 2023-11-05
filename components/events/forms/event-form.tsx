import { FormEvent, useState, useContext } from "react"
import AuthContext from "@/context/AuthContext"
import SelectCountry from "./location/country"
import SelectState from "./location/state"
import SelectCity from "./location/city"
import ImageUpload from "./file/image"
import SelectCategory from "./category"


export default function CreateEventForm() {

    const { accessToken, refreshToken } = useContext(AuthContext)

    const [title, setTitle] = useState<string>("")
    const [excerpt, setExcerpt] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [image, setImage] = useState<string>("")
    const [video, setVideo] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [price, setPrice] = useState("")
    const [duration, setDuration] = useState("")
    const [countryId, setCountryId] = useState("")
    const [stateId, setStateId] = useState("")
    const [cityId, setCityId] = useState("")
    const [address, setAddress] = useState("")
    const [category, setCategory] = useState("")
    const [featured, setFeatured] = useState(false)

    function formHandler(event: FormEvent) {
        event.preventDefault()
        
        const newDate = date.split("-")
        const newTime = time.split(":")
        const [year, month, day, hour, minute] = newDate.concat(newTime).map(item => parseInt(item))
        const fullDate = new Date(year, month, day, hour, minute)
        const isoDate = fullDate.toISOString()
        
        const data = {
            title,
            excerpt,
            description,
            image,
            video: video || undefined,
            date: isoDate,
            duration: parseInt(duration),
            price: parseInt(price),
            location: {
                country: countryId || undefined,
                state: stateId || undefined,
                city: cityId || undefined,
                address
            },
            category: [],
            featured
        }

        async function createEvent() {
            const response = await fetch('http://localhost:3030/api/event/create', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "access-token": accessToken,
                    "refresh-token": refreshToken
                },
                body: JSON.stringify(data)
            })

            const { success, error, message, data: responseData } = await response.json()

            if (success && responseData) {
            } else if (!success || error || message) {
            }

        }
        createEvent()

    }

    return (
        <form action="" onSubmit={formHandler}>

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
                <label htmlFor="excerpt">خلاصه</label><br />
                <textarea
                    name="excerpt"
                    id="excerpt"
                    placeholder="به صورت خلاصه شرح دهید"
                    value={excerpt}
                    onChange={e => setExcerpt(e.target.value)}
                >
                </textarea>
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
                <ImageUpload setImageId={setImage} />
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
                <label htmlFor="category">دسته</label><br />
                <SelectCategory setCategoryId={setCategory} categoryId={category} />
                {category ? category : ""}
            </div>

            <div className="input-group">
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
                    <label htmlFor="time">ساعت</label><br />
                    <input
                        name="time"
                        id="time"
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                </div>
            </div>

            <div className="input-controller">
                <label htmlFor="duration">مدت زمان</label><br />
                <input
                    name="duration"
                    id="duration"
                    type="number"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
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
                    <SelectCountry setCountryId={setCountryId} />
                </div>
                <div className="input-controller">
                    <label htmlFor="state">استان</label><br />
                    <SelectState countryId={countryId} setStateId={setStateId} />
                </div>
                <div className="input-controller">
                    <label htmlFor="city">شهر</label><br />
                    <SelectCity countryId={countryId} stateId={stateId} setCityId={setCityId} />
                </div>
            </div>

            <div className="input-controller">
                <label htmlFor="address">آدرس</label><br />
                <input
                    name="address"
                    id="address"
                    type="text"
                    placeholder="خیابان ولیعصر عدالت 18..."
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
            </div>

            <div className="input-controller">
                <label htmlFor="featured">ویژه</label><br />
                <input
                    name="featured"
                    id="featured"
                    type="checkbox"
                    onChange={e => setFeatured(e.target.checked)}
                />
            </div>

            <div className="input-controller">
                <button>ثبت</button>
            </div>

        </form>
    )
}

