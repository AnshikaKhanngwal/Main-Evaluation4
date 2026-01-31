import { supabase } from "../supabaseClient.js";

export const registerVehical = async (req, res) => {
  try {
    const { name, registration_number, driver_id, allowed_passengers,owner_id } = req.body;

    if (!name || !registration_number || !driver_id ||!allowed_passengers || !owner_id) {
      return res.status(400).json({ error: "All fields required" });
    }

    const { data, error } = await supabase
      .from("user")
      .insert([{ name, registration_number, driver_id, allowed_passengers, ownr_id }])
      .select();

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json(data);
  } catch (err) {
  console.log("ERROR:", err.message);
  res.status(500).json({ error: err.message });
}

};
