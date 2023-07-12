/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponents: true,
      

        
    
       
        serverActions : true,
    },
    images: {
        domains: ['github.com', 'lh3.googleusercontent.com']
      },
     
}

module.exports = nextConfig
