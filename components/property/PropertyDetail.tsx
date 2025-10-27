interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    location: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p>{property.description}</p>
      <p className="font-semibold">Price: ${property.price}</p>
      <p>Location: {property.location}</p>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {property.images.map((img, index) => (
          <img key={index} src={img} alt={property.title} className="rounded" />
        ))}
      </div>
    </div>
  );
}
