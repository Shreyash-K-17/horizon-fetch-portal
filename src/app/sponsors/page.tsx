import Head from "next/head";
import { SponsorList } from "./SponsorList";
import sponsorsData from "./data/sponsors"; 

export default function SponsorsPage() {
  return (
    <main className="min-h-screen py-12 px-6 md:px-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Sponsors</h1>
      <div className="max-w-7xl mx-auto">
        {Object.entries(sponsorsData).map(([category, arr]) => (
          <SponsorList key={category} category={category} sponsors={arr} />
        ))}
      </div>
    </main>
  );
}
