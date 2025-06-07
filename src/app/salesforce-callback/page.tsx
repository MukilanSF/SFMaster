"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

async function fetchSalesforceUsername(accessToken: string, instanceUrl: string): Promise<string | null> {
  try {
    const response = await fetch(`${instanceUrl}/services/oauth2/userinfo`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.name || data.preferred_username || data.email || null;
  } catch {
    return null;
  }
}

function SalesforceCallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function handleCallback() {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get("access_token");
        const instanceUrl = params.get("instance_url");
        const state = params.get("state");
        if (accessToken && instanceUrl) {
          localStorage.setItem("sf_access_token", accessToken);
          localStorage.setItem("sf_instance_url", instanceUrl);

          // Fetch and store Salesforce username
          const username = await fetchSalesforceUsername(accessToken, instanceUrl);
          if (username) {
            localStorage.setItem("sf_username", username);
          }

          // Redirect back to app
          if (state) {
            router.replace(state);
          } else {
            router.replace("/");
          }
        }
      }
    }
    handleCallback();
  }, [router, searchParams]);

  return <div className="p-8 text-blue-700 font-bold">Login Successful. Redirecting...</div>;
}

export default function SalesforceCallback() {
  return (
    <Suspense>
      <SalesforceCallbackInner />
    </Suspense>
  );
}
