/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/webp'],
		unoptimized: true,
		remotePatterns: [
			{
				hostname: 'storage.googleapis.com'			
			}
		]
		
	},
};


export default nextConfig;
