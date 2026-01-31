import { supabase } from "../supabaseClient.js";

export const addedTrip = async (req, res) => {
  try {
    const {customer_id, vehicle_id, start_date,end_date, location, distance_km, passengers,created_at } = req.body;

    if (!customer_id|| !vehical_id|| !start_date ||!end_date ||!location ||!distance_km ||!passengers ||!created_at) {
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
