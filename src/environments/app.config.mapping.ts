export const appConfigMapping = {
  security: {
    clientId: (window as any).appConfig.security.clientId,
  },
  api: {
    devApi: (window as any).appConfig.api.devApi,
  },
  webComponents: (window as any).appConfig.webComponents,
};
