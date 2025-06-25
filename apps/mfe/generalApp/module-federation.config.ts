import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'generalApp',
  exposes: {
    './Module': 'apps/mfe/generalApp/src/app/remote-entry/entry-module.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
