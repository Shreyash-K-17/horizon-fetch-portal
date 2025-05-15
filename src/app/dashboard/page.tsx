import Link from "next/link";
import RegistredEvent from "./RegistredEvent";
import { getAllRegistredEventsOfUser } from "../actions/actions";
import Sidebar from "./Sidebar";

const Dashboard = async () => {
  const { data } = await getAllRegistredEventsOfUser();

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your event registrations and profile
          </p>
        </div>
        <Link href="/events">
          <button className="primary-btn">Browse Events</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <RegistredEvent registeredEvents={data} />

        {/* Sidebar */}
        <Sidebar registeredEvents={data} />
      </div>
    </div>
  );
};

export default Dashboard;
