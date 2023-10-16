
import { CountryModel } from "@/pages/events/create"

export default function SelectCountry({ countries }: { countries: CountryModel[] }) {

    function CountryHandler() {
        return countries.map(item => {
            return (
                <option key={item._id} value={item.name}>{item.name}</option>
            )
        })
    }

    return (
        <select>
            {CountryHandler()}
        </select>
    )
}
