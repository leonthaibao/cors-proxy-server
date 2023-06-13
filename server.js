const cors_proxy = require('cors-anywhere');

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8000;

cors_proxy
  .createServer({
    originWhitelist: [], // Add your desired origins here
    requireHeader: [],
    removeHeaders: []
  })
  .listen(port, host, () => {
    console.log(`CORS Anywhere server is running on ${host}:${port}`);
  });
