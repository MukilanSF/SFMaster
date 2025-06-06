import { supabase } from "../supabaseClient";

export async function saveSubmission({
  user_id,
  scenario_id,
  category,
  code,
  result,
  status,
}: {
  user_id: string;
  scenario_id: string;
  category: string;
  code: string;
  result: string;
  status: "pass" | "fail" | "pending";
}) {
  const { data, error } = await supabase
    .from("submissions")
    .insert([
      { user_id, scenario_id, category, code, result, status },
    ]);
  if (error) throw error;
  return data;
}
