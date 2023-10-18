import { useEffect, useState } from "react"

interface StateModel {
    name: string,
    slug: string,
    _id: string,
    __v: string
}

export default function SelectState(props: { countryId: string, setStateId: (value: string) => void }) {

    const { countryId, setStateId } = props

    const [states, setStates] = useState<StateModel[]>([])
    const [disabled, setDisabled] = useState<boolean>(true)
    const [disabledOption, setDisabledOption] = useState<boolean>(false)

    useEffect(() => {

        async function getStates() {
            if (!countryId) return
            const response = await fetch(`http://localhost:3030/api/location/state/liststate/${countryId}`, { method: "GET" })
            const { success, error, message, data } = await response.json()

            if (success && data) {
                setStates(data)
                setDisabled(false)
            }
            else if (!success || error || message) {
                setStates([])
                setDisabled(true)
            }
        }
        if (countryId) getStates()
    }, [countryId])

    useEffect(() => {
        setDisabledOption(true)
    }, [states])

    function statesHandler() {
        return states.map(item => {
            return (
                <option key={item._id} value={item._id}>{item.name}</option>
            )
        })
    }

    return (
        <select id="state" disabled={disabled} onChange={e => setStateId(e.target.value)}>
            <option value={""}>انتخاب کنید</option>
            {statesHandler()}
        </select>
    )
}
