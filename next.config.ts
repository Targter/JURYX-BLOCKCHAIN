// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Enabling headers globally
//   async headers() {
//     return [
//       {
//         source: "/(.*)", // Apply to all routes and static files
//         headers: [
//           {
//             key: "Cross-Origin-Embedder-Policy",
//             value: "require-corp",
//           },
//           {
//             key: "Cross-Origin-Opener-Policy",
//             value: "same-origin",
//           },
       
//         ],
//       },
//     ];
//   },
//   // Optional: Use standalone for better server deployment
//   output: "standalone",
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async headers() {
//     return [
//       {
//         source: '/:path*',
//         headers: [
//           {
//             key: 'Content-Security-Policy',
//             value: [
//               "default-src 'self'",
//               "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net https://sandpack.codesandbox.io https://26d400fc5462820-sandpack-bundler.pages.dev",
//               "connect-src 'self' https://sandpack.codesandbox.io https://26d400fc5462820-sandpack-bundler.pages.dev",
//               "frame-src 'self' https://sandpack.codesandbox.io https://26d400fc5462820-sandpack-bundler.pages.dev",
//               "style-src 'self' 'unsafe-inline'",
//               "img-src 'self' data:",
//             ].join('; '),
//           },
//         ],
//       },
//     ];
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.jsdelivr.net',
//       },
//       {
//         protocol: 'https',
//         hostname: 'sandpack.codesandbox.io',
//       },
//       {
//         protocol: 'https',
//         hostname: '26d400fc5462820-sandpack-bundler.pages.dev',
//       },
//     ],
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         fs: false,
//         path: false,
//         os: false,
//       };
//     }
//     return config;
//   },
//   reactStrictMode: true,
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
