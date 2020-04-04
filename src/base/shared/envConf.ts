import * as commonConfig from '../../env/env';
import * as dev from '../../env/env.development';
import * as prod from '../../env/env.production';
import { env } from './env';

const conf = env === 'development' ? dev : prod;
export const envConf = { ...commonConfig, ...conf };
