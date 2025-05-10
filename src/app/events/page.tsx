
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

import { getAllEvents } from "@/lib/auth";
import { EventsComponet } from "./EventDetailCard";

const Events = async () => {
  const events: Event[] | null = await getAllEvents();

  return (
    <main className="py-12">
      <EventsComponet events={events} />
    </main>
  );
};

export default Events;
