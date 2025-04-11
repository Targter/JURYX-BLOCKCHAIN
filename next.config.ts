/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enabling headers globally
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes and static files
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
       
        ],
      },
    ];
  },
  // Optional: Use standalone for better server deployment
  output: "standalone",
};

export default nextConfig;
