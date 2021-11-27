import { IRouterConfig } from 'ice';
import Home from '@/pages/index';
import NotFound from '@/components/NotFound';

const routes: IRouterConfig[] = [{
  path: '/',
  exact: true,
  component: Home,
}, {
  component: NotFound,
}];

export default routes;
