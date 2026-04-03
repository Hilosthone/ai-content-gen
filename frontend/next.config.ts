// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

const nextConfig = {
  experimental: {
    // If you want the compiler, it must be inside experimental
    reactCompiler: true,
  },
  // Other config...
}

export default nextConfig