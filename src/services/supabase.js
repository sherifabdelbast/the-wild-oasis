import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://qyiwswxzunszvgkggcuk.supabase.co",
  "sb_publishable_b8Jmjm7mvuVpQxTreSzhXQ_dCmJxO0f",
);

export default supabase;
