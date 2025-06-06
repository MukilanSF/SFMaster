import { NextApiRequest, NextApiResponse } from "next";

const CLIENT_ID = process.env.SALESFORCE_CLIENT_ID;
const REDIRECT_URI = process.env.SALESFORCE_REDIRECT_URI;
const SF_LOGIN_URL = "https://login.salesforce.com/";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Support redirecting back to the page the user was on
  const { from } = req.query;
  const state = from ? encodeURIComponent(from as string) : "";
  const params = new URLSearchParams({
    response_type: "token",
    client_id: CLIENT_ID || "",
    redirect_uri: REDIRECT_URI || "",
    scope: "refresh_token api id web openid",
    prompt: "login consent",
    display: "page",
    state
  });
  res.redirect(`${SF_LOGIN_URL}?${params.toString()}`);
}
