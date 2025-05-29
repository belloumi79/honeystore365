import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      { // Added for placeholder images
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      { // Added for Supabase Storage
        protocol: 'https',
        hostname: 'llsifflkfjogjagmbmpi.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Supprimez cette ligne problématique pour la production
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://9000-idx-studio-1745565635261.cluster-6vyo4gb53jczovun3dxslzjahs.cloudworkstations.dev' : '',
};

export default nextConfig;
