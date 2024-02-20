/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chicken-3455e.appspot.com/",
        port: "",
        pathname: "/products/**",
      },
    ],
  },
}

export default nextConfig
