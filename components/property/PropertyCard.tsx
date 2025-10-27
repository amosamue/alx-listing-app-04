import Link from "next/link";

export default function PropertyCard({ property }) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="font-bold text-lg mt-2">{property.name}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-semibold">${property.price}</p>
      <Link href={`/property/${property.id}`}>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
}
