export default function handler(req, res) {
  if (req.method === "POST") {
    const booking = req.body;
    console.log("Booking received:", booking);
    res.status(200).json({ message: "Booking confirmed!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
