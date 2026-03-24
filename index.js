const functions = require("firebase-functions");
const admin = require("firebase-admin");
const OpenAI = require("openai");

admin.initializeApp();

const openai = new OpenAI({
  apiKey: functions.config().openai.key,
});

exports.generateAstro = functions.https.onRequest(async (req, res) => {
  try {
    const { name, dob, time, place } = req.body;

    const kundliData = `
    Name: ${name}
    Mars in 7th house
    Jupiter in 2nd house
    Saturn Mahadasha running
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a Vedic astrologer." },
        { role: "user", content: kundliData }
      ],
    });

    res.json({ result: response.choices[0].message.content });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
});
