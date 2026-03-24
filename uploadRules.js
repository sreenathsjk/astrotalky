import admin from "firebase-admin";
import fs from "fs";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function upload(file) {
  const data = JSON.parse(fs.readFileSync(file));
  const batch = db.batch();

  data.forEach(rule => {
    const ref = db.collection("rules").doc();
    batch.set(ref, {
      condition: rule.condition,
      prediction: rule.prediction,
      category: rule.category || "general",
      severity: rule.severity || "medium",
      createdAt: new Date(),
    });
  });

  await batch.commit();
  console.log("Uploaded", file);
}

(async () => {
  for (let i = 1; i <= 5; i++) await upload(`rules_batch_${i}.json`);
})();
