import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import hotServer from './hotServer';
import sessionRoutes from './routes/sessionRoutes';
import applicationRoutes from './routes/applicationRoutes';

let app = express();

app.set('views', 'src/server/views/');
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, '../../build')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/sessions', sessionRoutes);
app.use('/', applicationRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on *:' + port);
});

if (process.env.NODE_ENV === 'development') {
  hotServer.listen(3001, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }

    console.log('[webpack-dev-server]');
  });
}

export default app;
