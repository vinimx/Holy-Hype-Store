const config = {
  apiUrl: import.meta.env.PROD 
    ? ''  // Production URL - empty string for relative path
    : 'http://localhost:3001'  // Development URL
};

export default config; 