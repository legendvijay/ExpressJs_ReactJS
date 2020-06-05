import debug from 'debug';
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import getPageData from './lib/getPageData.js';
var router = express.Router();
var app = express();

var __dirname = path.resolve();
app.get('/', function (req, res) {
    var PropsData = { RouteName: 'Profile' };
    var resData = getPageData(PropsData);
    res.send(resData);
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
