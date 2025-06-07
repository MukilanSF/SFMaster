"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function SalesforceCallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      const instanceUrl = params.get("instance_url");
      const state = params.get("state");
      if (accessToken && instanceUrl) {
        localStorage.setItem("sf_access_token", accessToken);
        localStorage.setItem("sf_instance_url", instanceUrl);
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

export default function SalesforceCallback() {
  return (
    <Suspense>
      <SalesforceCallbackInner />
    </Suspense>
  );
}
