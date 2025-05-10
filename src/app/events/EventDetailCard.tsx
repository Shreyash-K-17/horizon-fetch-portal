"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import eventBanner from "@/assets/eventBanner.jpg";
import { BiSolidCategory } from "react-icons/bi";
import { Event } from "./page";
import { IoTimeOutline } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import Link from "next/link";

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <Link href={`/events/${event.uid}`}>
      <div className="flex justify-center items-center">
        <Card className="group border border-black dark:border-white px-4 py-2 shadow-[5px_5px_0px_0px] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c] h-[450px] w-[320px] sm:w-[360px] md:w-[400px] flex flex-col justify-between gap-4 transition-all">
          {/* Header */}
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold truncate">
              {event.name}
            </CardTitle>
            <CardDescription className="text-sm line-clamp-3 text-muted-foreground group-hover:text-white/80 dark:group-hover:text-black transition-colors duration-300">
              {event.description || "No description"}
            </CardDescription>
          </CardHeader>

          {/* Content */}
          <CardContent className="flex flex-col justify-between gap-3 flex-grow">
            {/* Info Section */}
            <div className="text-sm text-muted-foreground space-y-3 group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
              {/* Category */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 font-semibold text-primary group-hover:text-white dark:group-hover:text-black">
                  <BiSolidCategory className="text-base" />
                  Category:
                </span>
                <span className="truncate">
                  {event.category || "Uncategorized"}
                </span>
              </div>

              {/* Registration Deadline */}
              <div>
                <div className="flex items-center gap-2 font-semibold text-primary mb-1 group-hover:text-white dark:group-hover:text-black">
                  <GoCalendar className="text-base" />
                  Registration Deadline
                </div>
                <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <IoTimeOutline className="text-base" />
                    <span>
                      <strong>Date:</strong>{" "}
                      {event.registration_deadline
                        ? new Date(
                            event.registration_deadline
                          ).toLocaleDateString()
                        : "No deadline"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoTimeOutline className="text-base" />
                    <span>
                      <strong>Time:</strong>{" "}
                      {event.registration_deadline
                        ? new Date(
                            event.registration_deadline
                          ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "--:--"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner */}
            {event.banner_url ? (
              <div className="relative w-full h-40 rounded-md overflow-hidden shadow-md">
                <Image
                  src={eventBanner}
                  alt="Event banner"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ) : (
              <div className="h-40 w-full flex items-center justify-center bg-gray-100 text-gray-400 rounded-md mt-2 border border-dashed">
                No Banner Available
              </div>
            )}
          </CardContent>
        </Card>
      </div>
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
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 lg:gap-y-16 place-content-center">
        {events.map((event) => (
          <EventCard key={event.uid} event={event} />
        ))}
      </div>
    </div>
  );
};

// export const EventCard = ({ event }: { event: Event }) => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>

//       </DialogTrigger>

//       <DialogContent className="max-w-xl max-h-[80vh] overflow-y-auto p-6 space-y-6">
//         {/* Header */}
//         <DialogHeader className="space-y-2">
//           <DialogTitle className="text-2xl font-bold">{event.name}</DialogTitle>
//           <DialogDescription className="text-sm text-muted-foreground">
//             {event.description || "No description provided"}
//           </DialogDescription>
//         </DialogHeader>

//         {/* Info Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800 dark:text-gray-300">
//           {event.category && (
//             <div className="flex items-start gap-2">
//               <BiCategoryAlt className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Category:</strong> {event.category}
//               </span>
//             </div>
//           )}
//           {event.venue && (
//             <div className="flex items-start gap-2">
//               <BiMap className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Venue:</strong> {event.venue}
//               </span>
//             </div>
//           )}
//           {event.start_time && (
//             <div className="flex items-start gap-2">
//               <BiTimeFive className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Start:</strong>{" "}
//                 {new Date(event.start_time).toLocaleString()}
//               </span>
//             </div>
//           )}
//           {event.end_time && (
//             <div className="flex items-start gap-2">
//               <BiTimeFive className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>End:</strong>{" "}
//                 {new Date(event.end_time).toLocaleString()}
//               </span>
//             </div>
//           )}
//           {event.registration_deadline && (
//             <div className="flex items-start gap-2">
//               <BiCalendarEvent className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Registration:</strong>{" "}
//                 {new Date(event.registration_deadline).toLocaleString()}
//               </span>
//             </div>
//           )}
//           {event.max_capacity && (
//             <div className="flex items-start gap-2">
//               <BiGroup className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Capacity:</strong> {event.max_capacity}
//               </span>
//             </div>
//           )}
//           {event.is_team_event !== undefined && (
//             <div className="flex items-start gap-2">
//               <BiGroup className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Team Event:</strong>{" "}
//                 {event.is_team_event ? "Yes" : "No"}
//               </span>
//             </div>
//           )}
//           {event.is_team_event && event.team_size_min && (
//             <div className="flex items-start gap-2">
//               <BiGroup className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Min Team Size:</strong> {event.team_size_min}
//               </span>
//             </div>
//           )}
//           {event.is_team_event && event.team_size_max && (
//             <div className="flex items-start gap-2">
//               <BiGroup className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Max Team Size:</strong> {event.team_size_max}
//               </span>
//             </div>
//           )}
//           {event.rules && (
//             <div className="flex items-start gap-2 sm:col-span-2">
//               <BiListUl className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Rules:</strong> {event.rules}
//               </span>
//             </div>
//           )}
//           {event.contact_email && (
//             <div className="flex items-start gap-2">
//               <BiEnvelope className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Email:</strong>{" "}
//                 <a
//                   href={`mailto:${event.contact_email}`}
//                   className="underline hover:text-blue-500"
//                 >
//                   {event.contact_email}
//                 </a>
//               </span>
//             </div>
//           )}
//           {event.contact_phone && (
//             <div className="flex items-start gap-2">
//               <BiPhone className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Phone:</strong> {event.contact_phone}
//               </span>
//             </div>
//           )}
//           {event.created_by && (
//             <div className="flex items-start gap-2">
//               <BiUserCircle className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Created By:</strong> {event.created_by}
//               </span>
//             </div>
//           )}
//           {event.created_at && (
//             <div className="flex items-start gap-2">
//               <BiEditAlt className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Created At:</strong>{" "}
//                 {new Date(event.created_at).toLocaleString()}
//               </span>
//             </div>
//           )}
//           {event.updated_at && (
//             <div className="flex items-start gap-2">
//               <BiEditAlt className="mt-0.5 text-lg text-primary" />
//               <span>
//                 <strong>Updated At:</strong>{" "}
//                 {new Date(event.updated_at).toLocaleString()}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Banner Section */}
//         {event.banner_url && (
//           <div className="pt-6">
//             <h4 className="font-semibold mb-2 text-lg">Banner</h4>
//             <Image
//               src={event.banner_url}
//               alt="Event banner"
//               className="w-full h-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
//               width={800}
//               height={400}
//             />
//           </div>
//         )}
//       </DialogContent>
//     </Dialog>
//   );
// };
