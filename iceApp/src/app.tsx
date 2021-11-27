import { runApp, IAppConfig } from 'ice';
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';

const appConfig: IAppConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
  },
  router: {
    type: 'browser',
  },
  icestark: {
    Layout: ({ children }) => <>{children}</>,
    getApps: () => {
      const apps = [{
        path: '/react',
        title: 'react-app',
        sandbox: true,
        url: [
          '../dist/reactApp/reactapp.umd.js',
          '../dist/reactApp/style.css',
        ],
      }, {
        path: '/vue',
        title: 'vue-app',
        sandbox: true,
        url: [
          '../dist/vueApp/vueapp.umd.js',
          '../dist/vueApp/style.css',
        ],
      }];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
};

runApp(appConfig);
