import { commonEnv } from './environment.common';

const env: Partial<typeof commonEnv> = {
  name: 'prod',
  production: true,
};

export const environment = Object.assign(commonEnv, env);
