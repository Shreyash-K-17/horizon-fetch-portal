import Image from "next/image";

export interface SponsorCardProps {
  logo: string;
  name: string;
  booth: string;
}


export function SponsorCard({ logo, name, booth }: SponsorCardProps) {

// export default function SponsorCard({ logo, name, booth }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center h-20">
        <Image 
          src={logo} 
          alt={name} 
          width={150} 
          height={80} 
          className="object-contain"
        />
      </div>
      <p className="mt-3 font-semibold text-gray-800">{name}</p>
      <p className="text-sm text-gray-600">Booth No: {booth}</p>
      <button className="mt-3 text-blue-600 uppercase text-sm font-medium hover:underline">
        View Profile
      </button>
    </div>
  );
}
