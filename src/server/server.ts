import * as express from 'express';
import apiRouter from './routes';

const app = express();

app.use(express.json()); //parses incoming post request JSON bodies. req.body is now defined
app.use(express.static('public'));
app.use("/api", apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
