import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface EventCardProps {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard: FC<EventCardProps> = ({
  title,
  image,
  slug,
  time,
  location,
  date,
}) => {
  return (
    <Link href={`/events`} id="event-card">
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />

      <div className="space-y-3">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/icons/pin.svg"
            alt="location"
            width={16}
            height={16}
            className="size-4"
          />
          <p>{location}</p>
        </div>

        <p className="title text-white">{title}</p>

        <div className="datetime">
          <div className="items-center">
            <Image
              src="/icons/calendar.svg"
              alt="date"
              width={16}
              height={16}
              className="size-4"
            />
            <p>{date}</p>
          </div>

          <div className="items-center">
            <Image
              src="/icons/clock.svg"
              alt="time"
              width={16}
              height={16}
              className="size-4"
            />
            <p>{time}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
