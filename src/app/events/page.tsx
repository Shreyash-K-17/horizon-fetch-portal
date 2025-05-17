export interface Event {
  uid: string;
  name: string;
  description?: string;
  category?: string;
  start_time?: string; // ISO 8601 datetime string
  end_time?: string; // ISO 8601 datetime string
  venue?: string;
  max_capacity?: number;
  is_team_event?: boolean;
  team_size_min?: number;
  team_size_max?: number;
  rules?: string;
  contact_email?: string;
  contact_phone?: string;
  registration_deadline?: string; // ISO 8601 datetime string
  created_by?: string;
  banner_url?: string;
  created_at?: string; // ISO 8601 datetime string
  updated_at?: string; // ISO 8601 datetime string
}

import { Metadata } from "next";
import { getAllEvents } from "../actions/actions";
import { EventsComponet } from "./EventDetailCard";

export const metadata: Metadata = {
  title: "Events | Horizon Tect Fest 2025",
  description:
    "Explore upcoming keynotes, workshops, and networking events at Horizon Tect Fest 2025.",
};

const Events = async () => {
  const { data } = await getAllEvents();

  return (
    <main className="py-12">
      <EventsComponet events={data} />
    </main>
  );
};

export default Events;
