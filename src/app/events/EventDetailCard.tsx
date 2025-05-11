"use client";

import Image from "next/image";
import eventBanner from "@/assets/eventBanner.jpg";
import { Event } from "./page";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { calculateDaysRemaining, formatDate } from "@/lib/utils";

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link href={`/events/${event.uid}`} key={event.uid} className="group">
      <Card className="overflow-hidden h-full transition-all border-[1px] border-black dark:border-white shadow-[5px_5px_0px_0px] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c]">
        <div className="relative h-48">
          <Image
            src={event.banner_url || eventBanner}
            alt={event.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-transform group-hover:scale-105"></div>
          <div className="absolute bottom-3 left-3">
            <Badge variant="secondary" className="mb-1">
              {event.category}
            </Badge>
            {event.is_team_event && (
              <Badge variant="outline" className="bg-black/50 text-white ml-2">
                Team Event
              </Badge>
            )}
          </div>
          <div className="absolute top-3 right-3 bg-black/60 text-white text-sm font-medium px-2 py-1 rounded-md">
            {calculateDaysRemaining(event.start_time!)} days left
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold mb-2 line-clamp-1">{event.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
            {event.description}
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span>{formatDate(event.start_time!)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{event.venue}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export const EventsComponet = ({ events }: { events: Event[] | null }) => {
  if (!events || events.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-10">
        No events available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {events.map((event) => (
        <EventCard key={event.uid} event={event} />
      ))}
    </div>
  );
};