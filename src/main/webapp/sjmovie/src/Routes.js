import DefaultLayout from './layout/DefaultLayout'
import { lazy } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

export const MainPage = lazy(() => import('./views/Main'))
export const MoviePage = lazy(() => import('./views/movie/MovieHome'))
export const CinemaPage = lazy(() => import('./views/cinema/CinemaHome'))
export const TicketingPage = lazy(() => import('./views/ticketing/TicketingHome'))
export const SignMain = lazy(() => import('./views/SignMain'))

export default function Routes() {
  return useRoutes([
    { index: true, element: <MainPage /> },
    {
      element: (
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      ),
      children: [
        {
          path: 'movie',
          element: <MoviePage />,
        },
        {
          path: 'cinema',
          element: <CinemaPage />,
        },
        {
          path: 'ticketing',
          element: <TicketingPage />,
        },
      ],
    },
    {
      path: 'sign',
      element: <SignMain />,
    },
  ])
}
