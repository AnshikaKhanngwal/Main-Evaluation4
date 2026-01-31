import { supabase } from "../supabaseClient.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, role, created_at } = req.body;

    if (!name || !email || !role || !created_at) {
      return res.status(400).json({ error: "All fields required" });
    }

    const { data, error } = await supabase
      .from("user")
      .insert([{ name, email, role, created_at}])
      .select();

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json(data);
  } catch (err) {
  console.log("ERROR:", err.message);
  res.status(500).json({ error: err.message });
}

};
