export default function handler(req, res) {
  const properties = [
    {
      id: 1,
      name: "Cozy Apartment in Accra",
      description: "A cozy apartment in the heart of Accra.",
      location: "Accra, Ghana",
      price: 120,
      image: "/images/properties/accra-apartment.jpg",
    },
    {
      id: 2,
      name: "Luxury Villa",
      description: "A luxurious villa with modern amenities.",
      location: "Tema, Ghana",
      price: 300,
      image: "/images/properties/luxury-villa.jpg",
    },
    {
      id: 3,
      name: "Beachfront Bungalow",
      description: "A beautiful bungalow right on the beach.",
      location: "Cape Coast, Ghana",
      price: 200,
      image: "/images/properties/beach-bungalow.jpg",
    },
  ];
  res.status(200).json(properties);
}
