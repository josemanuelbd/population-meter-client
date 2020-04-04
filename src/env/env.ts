import * as dev from './env.development';
import * as prod from './env.production';

import { env } from '../base/shared/env';

export * from './env.common';

const getApiUrl = () => (env === 'development' ? dev.API_URL : prod.API_URL);

export const API = {
  LOGIN_GET: `${ getApiUrl() }/login.get.json`,
  LOGIN_POST: `${ getApiUrl() }/login`
};
