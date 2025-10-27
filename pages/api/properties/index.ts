import type { NextApiRequest, NextApiResponse } from "next";

const properties = [
  {
    id: "1",
    title: "Cozy Apartment in Accra",
    location: "Accra, Ghana",
    price: 120,
    image: "/images/properties/cozy-apartment.jpg",
  },
  {
    id: "2",
    title: "Luxury Villa",
    location: "Tema, Ghana",
    price: 300,
    image: "/images/properties/luxury-villa.jpg",
  },
  {
    id: "3",
    title: "Beachfront Bungalow",
    location: "Cape Coast, Ghana",
    price: 200,
    image: "/images/properties/beachfront-bungalow.jpg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(properties);
}
