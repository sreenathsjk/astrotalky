import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({ apiKey: "YOUR_OPENAI_API_KEY" });

async function generateRules(batch = 1) {
  const prompt = `
Generate 200 Vedic astrology rules in JSON format with:
condition, prediction, category, severity.
Return only JSON array.
`;

  const res = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  fs.writeFileSync(`rules_batch_${batch}.json`, res.choices[0].message.content);
  console.log("Saved batch", batch);
}

(async () => {
  for (let i = 1; i <= 5; i++) await generateRules(i);
})();
