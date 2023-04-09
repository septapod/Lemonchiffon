import { GPT4 } from "../index.js";

export default async function handler(req, res) {
  const message = JSON.parse(req.body);
  try {
    const response = await GPT4(message);
    res.status(200).json({ response });
  } catch (e) {
    res.status(500).json({ error: "Something went wrong" });
  }
}