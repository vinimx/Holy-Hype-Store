const config = {
  apiUrl: import.meta.env.PROD 
    ? '/api'  // Production URL - relative path
    : 'http://localhost:3001'  // Development URL
};

export default config; 