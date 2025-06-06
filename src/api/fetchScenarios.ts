import { supabase } from "../supabaseClient";

export async function fetchScenariosByCategory(category: string) {
  const { data, error } = await supabase
    .from("scenarios")
    .select("id, title, description, level, starter_code, hints")
    .eq("category", category);
  if (error) throw error;
  return data;
}
