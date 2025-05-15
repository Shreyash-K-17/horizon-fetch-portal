export interface TeamMember {
  uid: string;
  name: string;
  email: string;
  phone: string;
}

export interface EventDetails {
  name: string;
  category: string;
}

export interface RegisteredEvent {
  uid: string;
  event_id: string;
  user_id: string;
  is_team_event: boolean;
  team_name: string | null;
  status: "registered" | "pending" | "cancelled"; // add other statuses if needed
  created_at: string;
  team_members: TeamMember[];
  event: EventDetails;
}
