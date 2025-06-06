import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SalesforceCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Parse access_token from URL fragment
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      const instanceUrl = params.get("instance_url");
      const state = params.get("state");
      if (accessToken && instanceUrl) {
        localStorage.setItem("sf_access_token", accessToken);
        localStorage.setItem("sf_instance_url", instanceUrl);
        // Redirect to the original page if present, else home
        if (state) {
          router.replace(state);
        } else {
          router.replace("/");
        }
      }
    }
  }, [router, searchParams]);

  return <div className="p-8 text-blue-700 font-bold">Connecting to Salesforce...</div>;
}
