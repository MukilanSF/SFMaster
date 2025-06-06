export async function executeApexInSalesforce(code: string): Promise<{ success: boolean; result: string }> {
  if (typeof window === "undefined") return { success: false, result: "Not in browser context." };
  const accessToken = localStorage.getItem("sf_access_token");
  const instanceUrl = localStorage.getItem("sf_instance_url");
  if (!accessToken || !instanceUrl) {
    return { success: false, result: "Not connected to Salesforce." };
  }
  try {
    const resp = await fetch(`${instanceUrl}/services/data/v59.0/tooling/executeAnonymous/`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        anonymousBody: code
      })
    });
    const data = await resp.json();
    if (data.compiled && data.success) {
      return { success: true, result: data.debugLog || "Apex executed successfully." };
    } else {
      return { success: false, result: data.compileProblem || data.exceptionMessage || "Apex execution failed." };
    }
  } catch (e: any) {
    return { success: false, result: e.message || "Unknown error." };
  }
}
