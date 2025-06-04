import db from './db.json';

export default function handler(req, res) {
  const { path } = req.query;
  
  if (!path) {
    return res.status(400).json({ error: 'Path parameter is required' });
  }

  const data = db[path];
  
  if (!data) {
    return res.status(404).json({ error: 'Data not found' });
  }

  res.status(200).json(data);
} 