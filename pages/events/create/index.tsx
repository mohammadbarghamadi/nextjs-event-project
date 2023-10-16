import CreateEventForm from "@/components/events/forms/event-form"

export interface CountryModel {
    name: string,
    slug: string,
    _id: string,
    __v: number
}

export default function CreateEvent({ countries }: { countries: CountryModel[] }) {
    return (
        <>
            <CreateEventForm countries={countries}/>
        </>
    )
}

export async function getStaticProps() {
    const rawResponse = await fetch('http://localhost:3030/api/location/country/list', {
        method: "GET"
    })

    const { success, error, message, data } = await rawResponse.json()

    console.log(success, error, message, data)

    if (success && data) {
        return {
            props: { countries: data }
        }
    }
    else return {
        props: { countries: [] }
    }
}