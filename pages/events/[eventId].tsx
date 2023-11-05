


export default function EventDetail() {
    return (
        <div className="">
        </div>
    )
}

export async function getStaticProps(contex: any) {

    const response = await fetch("http://localhost:3030/api/event/get")

    const { success, error, message, data } = await response.json()

    if (success && data) {
        console.log(data)
    } else {
        console.log(success, error, message)
    }

    return {
        props: { event: {} }
    }
}

export async function getStaticPaths(contex:any) {
    return {
        paths: []
    }
    
}