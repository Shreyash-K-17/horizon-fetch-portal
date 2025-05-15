import { getEventById } from "@/app/actions/actions";
import EventFullInfo from "./EventFullInfo";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { data } = await getEventById(id);
  return {
    title: data?.name || "Event Details",
    description: data?.description || "Details about the event",
  };
}

const EventDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const { data } = await getEventById(id);

  return (
    <div className="max-w-7xl mx-auto md:px-4 md:py-8">
      {data ? (
        <EventFullInfo event={data} />
      ) : (
        <div className="text-center text-red-500 font-semibold">
          Event not found.
        </div>
      )}
    </div>
  );
};

export default EventDetailPage;
