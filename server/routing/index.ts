import routes from './routes';
import { Route, ExpressApp, Routes } from './types';

const setRouting = (app: ExpressApp): Routes =>
  routes.map((route: Route): Route => app[route.method](route.url, route.handler));

export default setRouting;
