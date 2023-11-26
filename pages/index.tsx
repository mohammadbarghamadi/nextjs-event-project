import HeroSection from "@/components/Home/hero"
import CoWorker from "@/components/Home/coworkers"
import EventList from "@/components/Home/events"
import { EventModel } from "./events"
import Head from "next/head"

export default function HomePage(props: { events: EventModel[] }) {
  const { events } = props
  return (
    <div className="home-page">
      <Head>
        <title>رویداد سیستم - مدیریت آنلاین رویدادها</title>
        <meta name="description" content="با رویداد سیستم به وبینار ها و سمینارهای مختلف دسترسی داشته باشید و رویدادهای خود را به سادگی ایجاد و مدیریت کنید" />
      </Head>
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