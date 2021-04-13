export default function handler(req, res) {
  res.setPreviewData({});

  if (req.query.key !== process.env.PREVIEW_KEY) {
    return res.status(401).json({ message: 'Invalid key to enable preview' });
  }

  res.writeHead(307, { location: '/' });

  return res.end();
}
