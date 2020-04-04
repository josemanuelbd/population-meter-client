import path from 'path';
import express, { Express } from 'express';

const env = process.env.NODE_ENV;

const commonStatics = (): any[] => [];

const devStatics = () => [{ route: '/api', dir: path.join(__dirname, '../mocks') }];

const prodStatics = () => [{ route: '/', dir: path.join(__dirname, '../dist') }];

const statics = env === 'production'
  ? commonStatics().concat(prodStatics())
  : commonStatics().concat(devStatics());

const setStatics = (app: Express) =>
  statics.map(staticPath =>
    app.use(staticPath.route, express.static(staticPath.dir, staticPath.cache)));

export default setStatics;
