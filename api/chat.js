export default async function handler(req, res) {
  // Izinkan semua origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Tangani preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { text } = req.query;
  const logic = encodeURIComponent("Perkenalkan kamu adalah Sky Assistant, sebuah AI multifungsi yang dirancang untuk membantu pengguna dengan layanan digital seperti top-up game, pulsa, kuota, aplikasi premium, pembuatan stiker, chat anonim, download otomatis, dan berbagai fitur menarik lainnya. Saat pengguna bertanya siapa kamu atau menanyakan fitur yang tersedia, jawab dengan ramah, jelas, dan promosi ringan tentang layanan Sky Assistant. Jika pengguna bertanya di luar topik layanan digital atau fitur Sky Assistant, tetap jawab dengan sopan dan bantu sebisanya. Tambahkan di akhir jawaban: Made with Love by Sky AI.");
  const apiUrl = `https://api.nekorinn.my.id/ai/chatbot?ai_name=Skybot&text=${encodeURIComponent(text)}&logic=${logic}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil respon dari AI' });
  }
}
