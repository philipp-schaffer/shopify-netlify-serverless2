import dotenv from "dotenv";
dotenv.config();

const shopifyApiBaseUrl = "myshopify.com";

export default {
  clientId: process.env.SHOPIFY_API_KEY,
  clientSecret: process.env.SHOPIFY_API_SECRET,
  tokenHost: shopifyApiBaseUrl,
  authorizePath: `${shopifyApiBaseUrl}/admin/oauth/authorize`,
  tokenPath: `${shopifyApiBaseUrl}/admin/oauth/access_token`,
  redirect_uri: `${process.env.APP_URL}/.netlify/functions/shopify-auth-callback`,
  appUrl: process.env.APP_URL,
  appSecret: process.env.APP_SECRET
};
