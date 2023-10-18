import { useEffect, useState } from "react"

export interface CountryModel {
    name: string,
    slug: string,
    _id: string,
    __v: number
}

export default function SelectCountry(props: { setCountryId: (value: string) => void }) {

    const [countries, setCountries] = useState<CountryModel[]>([])
    const [disabledOption, setDisabledOption] = useState<boolean>(false)

    useEffect(() => {

        async function getCountry() {
            const response = await fetch('http://localhost:3030/api/location/country/list', { method: "GET" })

            const { success, error, message, data } = await response.json()

            if (success && data) {
                setCountries(data)
            }
        }

        getCountry()

    }, [])

    useEffect(() => {
        setDisabledOption(true)
    }, [countries])

    function countryHandler() {
        return countries.map(item => {
            return (
                <option key={item._id} value={item._id}>{item.name}</option>
            )
        })
    }

    return (
        <select id="country" onChange={e => props.setCountryId(e.target.value)}>
            <option disabled={disabledOption} defaultChecked value={""}>انتخاب کنید</option>
            {countryHandler()}
        </select>
    )
}
