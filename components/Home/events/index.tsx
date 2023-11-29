import EventBox from "@/components/events/event-summery";
import { EventModel } from "@/pages/events";
import CSS from "./index.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export default function EventList(props: { events: EventModel[] }) {

    const { events } = props

    function eventList() {
        return events.map(item => {
            return (
                <SwiperSlide key={item._id}>
                    <EventBox event={item} />
                </SwiperSlide>
            )
        })
    }

    return (
        <div className={CSS.homeEventListContainer}>
            <div className="container">
                <h2>تازه ترین رویدادها</h2>
            </div>
            <div className="container">

                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation
                    autoplay={true}
                >
                    {eventList()}
                </Swiper>
            </div>
        </div>
    )
}

