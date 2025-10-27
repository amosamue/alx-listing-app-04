import type { NextApiRequest, NextApiResponse } from "next";

// Mock reviews for properties
const reviewsData: Record<string, { id: string; comment: string }[]> = {
  "1": [
    { id: "r1", comment: "Amazing apartment, very cozy!" },
    { id: "r2", comment: "Loved the location and facilities." },
  ],
  "2": [
    { id: "r3", comment: "Luxury villa with everything you need." },
  ],
  "3": [
    { id: "r4", comment: "Perfect beachside stay." },
    { id: "r5", comment: "Very relaxing and beautiful view." },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const reviews = reviewsData[id as string] || [];

  res.status(200).json(reviews);
}
