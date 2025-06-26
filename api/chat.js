export default async function handler(req, res) {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: "Parameter 'text' diperlukan." });

  const logic = encodeURIComponent(`Perkenalkan kamu adalah Sky Assistant, sebuah AI multifungsi... dst`);

  const apiUrl = `https://api.nekorinn.my.id/ai/chatbot?ai_name=Skybot&text=${encodeURIComponent(text)}&logic=${logic}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Gagal menghubungi Skybot API." });
  }
}
