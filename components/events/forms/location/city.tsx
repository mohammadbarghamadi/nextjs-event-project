import { useEffect, useState } from "react"

interface CityModel {
    name: string,
    slug: string,
    _id: string,
    __v: number
}

interface CityProps {
    stateId: string,
    countryId: string,
    setCityId: (value: string) => void
}

export default function SelectCity(props: CityProps) {

    const { stateId, countryId, setCityId } = props

    const [cities, setCities] = useState<CityModel[]>([])
    const [disabled, setDisabled] = useState<boolean>(true)
    const [disabledOption, setDisabledOption] = useState<boolean>(false)

    useEffect(() => {

        async function getCities() {
            if (!stateId) return
            const response = await fetch(`http://localhost:3030/api/location/city/listcity/${stateId}`, { method: "GET" })
            const { success, error, message, data } = await response.json()

            if (success && data) {
                setCities(data)
                setDisabled(false)
            }
            else if (!success || error || message) {
                setCities([])
                setDisabled(true)
            }
        }
        if (stateId) getCities()
    }, [stateId])

    useEffect(() => {
        setDisabledOption(true)
    }, [cities])

    useEffect(()=> {
        setDisabled(true)
    },[countryId])

    function cityHandler() {
        return cities.map(item => {
            return (
                <option key={item._id} value={item._id}>{item.name}</option>
            )
        })
    }

    return (
        <select id="country" disabled={disabled} onChange={e => setCityId(e.target.value)}>
            <option defaultChecked value={""}>انتخاب کنید</option>
            {cityHandler()}
        </select>
    )
}
