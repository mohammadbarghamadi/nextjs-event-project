import HeroSection from "@/components/Home/hero"
import CoWorker from "@/components/Home/coworkers"
import EventList from "@/components/Home/events"
import { EventModel } from "./events"

export default function HomePage(props: { events: EventModel[] }) {
  const { events } = props
  return (
    <div className="home-page">
      <div className="container">
        <HeroSection />
        <CoWorker />
      </div>
        <EventList events={events} />
    </div>
  )
}

export async function getStaticProps() {

  const getEvents = await fetch("http://localhost:3030/api/event/list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })

  const { success, error, message, data } = await getEvents.json()

  if (success && data) {
    return { props: { events: data } }
  } else {
    return {
      props: { events: [] }
    }
  }

}