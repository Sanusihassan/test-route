/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/test-route-assets" : "",
  transpilePackages: ["pdfequips-navbar"],
  output: "export"
};

export default nextConfig;
