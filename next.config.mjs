/** @type {import('next').NextConfig} */

const nextConfig = {
    // Enable Partial Prerendering (PPR) 
    // The 'incremental' value allows you to adopt PPR for specific routes.
    experimental: {
        ppr: 'incremental',
      },
};

export default nextConfig;
