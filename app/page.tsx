import EventCard from "@/components/event-card";
import ExploreBtn from "@/components/explore-btn";
import { events } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <section className="sm:mt-16 mt-2.5">
        <h1 className="text-center">
          The Hub for Every Dev <br /> Event You Can’t Miss
        </h1>
        <p className="text-center mt-3">
          Hackathons, Meetups, and Conferences, All in One Place
        </p>

        <ExploreBtn />
      </section>

      <section className="mt-16 sm:mt-24 space-y-6">
        <h3>Featured Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title} className="list-none">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
