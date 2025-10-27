import Image from "next/image";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-lg transition">
      <div className="relative w-full h-48">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold mt-2">{property.title}</h2>
      <p className="text-gray-500">{property.location}</p>
      <p className="font-bold mt-1">${property.price}</p>
    </div>
  );
}
