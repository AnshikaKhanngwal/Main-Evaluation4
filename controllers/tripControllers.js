import { supabase } from "../supabaseClient.js";

export const addedTrip = async (req, res) => {
  try {
    const { full_name, email, phone } = req.body;

    if (!full_name || !email || !phone) {
      return res.status(400).json({ error: "All fields required" });
    }

    const { data, error } = await supabase
      .from("trip")
      .insert([{ full_name, email, phone }])
      .select();

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json(data);
  } catch (err) {
  console.log("ERROR:", err.message);
  res.status(500).json({ error: err.message });
}

};
