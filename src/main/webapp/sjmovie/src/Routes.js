import DefaultLayout from './layout/DefaultLayout';
import { lazy } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

export const MainPage = lazy(() => import('./views/Main'));
export const TestPage = lazy(() => import('./views/Test'));

export default function Routes() {
  return useRoutes([
    {
      element: (
        <DefaultLayout>
          <Outlet/>
        </DefaultLayout>
      ),
      children:[
        {path:'home',element:<MainPage/>},
      ]
    },
    {path:'test',element:<TestPage/>}
  ])
}