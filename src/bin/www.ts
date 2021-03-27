import http from 'http';
import { app } from '../app';

const PORT: string = process.env.PORT || '3000';

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is up and listening on port ${PORT}...`);
});
