import { SponsorCard } from "./SponsorCard";

export interface Sponsor {
  name: string;
  booth: string;
  logo: string;
}

interface SponsorListProps {
  category: string;
  sponsors: Sponsor[];
}


export function SponsorList({ category, sponsors }: SponsorListProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {sponsors.map((s, idx) => (
          <SponsorCard key={idx} {...s} />
        ))}
      </div>
    </section>
  );
}
