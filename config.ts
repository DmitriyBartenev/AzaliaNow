const config = require('./package.json');

const port = config.config.port;

export const baseURL = `http://localhost:${port}`;