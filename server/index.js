import http from 'http';
import express from 'express';
import path from 'path';
import db from './services/db';
import storesRoute from './routes/stores';
import storeTypesRoute from './routes/store-types';
import bodyParser from 'body-parser';

let app = express();
app.server = http.createServer(app);
app.use(bodyParser.json());
app.use([storesRoute, storeTypesRoute]);

app.server.listen(process.env.PORT || 8080, function () {
  console.log('Listening on port %d!', app.server.address().port);
});

export default app;
