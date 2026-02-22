import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qyiwswxzunszvgkggcuk.supabase.co";
const supabaseKey = "sb_publishable_b8Jmjm7mvuVpQxTreSzhXQ_dCmJxO0f";
// Create a single supabase client for interacting with your database

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
