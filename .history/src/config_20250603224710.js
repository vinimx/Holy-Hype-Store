const config = {
  apiUrl: import.meta.env.PROD 
    ? 'https://holy-hype-store.vercel.app/api'  // Production URL
    : 'http://localhost:3001'  // Development URL
};

export default config; 