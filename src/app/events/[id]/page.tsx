import { getEventById } from "@/lib/auth";
import EventFullInfo from "./EventFullInfo";

type Props = {
  params: {
    id: string;
  };
};

const EventDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const event = await getEventById(id);

  return (
    <div className="max-w-7xl mx-auto md:px-4 md:py-8">
      {event ? (
        <EventFullInfo event={event} />
      ) : (
        <div className="text-center text-red-500 font-semibold">
          Event not found.
        </div>
      )}
    </div>
  );
};

export default EventDetailPage;
