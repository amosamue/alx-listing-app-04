const reviewsData = {
  1: [
    { id: 1, comment: "Perfect beachside stay." },
    { id: 2, comment: "Very relaxing and beautiful view." },
  ],
  2: [
    { id: 1, comment: "Luxury villa with everything you need." },
  ],
  3: [
    { id: 1, comment: "Amazing apartment, very cozy!" },
    { id: 2, comment: "Loved the location and facilities." },
  ],
};

export default function handler(req, res) {
  const { id } = req.query;
  const reviews = reviewsData[id] || [];
  res.status(200).json(reviews);
}
