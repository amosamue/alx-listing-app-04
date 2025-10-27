import ReviewSection from "./ReviewSection";

export default function PropertyDetail({ property }) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-96 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{property.name}</h1>
      <p className="text-gray-700 mt-2">{property.description}</p>
      <p className="text-gray-500 mt-1">{property.location}</p>
      <p className="text-green-600 font-semibold mt-2">${property.price}</p>

      <h2 className="text-2xl font-bold mt-6">Reviews</h2>
      <ReviewSection propertyId={property.id} />
    </div>
  );
}
