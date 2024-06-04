import DefaultLayout from './layout/DefaultLayout'
import { lazy } from 'react'
import { Outlet, useRoutes } from 'react-router-dom'

export const MainPage = lazy(() => import('./views/Main'))
export const MoviePage = lazy(() => import('./views/movie/MovieHome'))
export const CinemaPage = lazy(() => import('./views/cinema/CinemaHome'))
export const TicketingPage = lazy(() => import('./views/ticketing/TicketingHome'))

export default function Routes() {
  return useRoutes([
    {
      element: (
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      ),
      children: [
        { index: true, element: <MainPage /> },
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
  ])
}
