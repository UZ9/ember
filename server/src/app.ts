import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import compressFilter from './utils/compressFilter.util';
import config from './config/config';
import WebSocket from 'ws';
import http from 'http';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(
  cors({
    origin: [config.cors_origin],
    credentials: true,
  })
);

// Helmet is used to secure this app by configuring the http-header
app.use(helmet());

// Compression is used to reduce the size of the response body
app.use(compression({ filter: compressFilter }));

app.get('/', (_req: Request, res: Response) => {
  res.send('Helloooo Worlddddd!');
});

wss.on('connection', (ws) => {

    const boxCoords : number[][] = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            boxCoords.push([i, j, 0]);
        }
    }

    const coords = { boxCoords };



    ws.send(JSON.stringify(coords));

});

server.listen(config.websocket_port, () => {
    console.log(`Successfully started websocket server on port ${config.websocket_port}`);
});

export default app;
