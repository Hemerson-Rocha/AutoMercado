import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Homepage/Home"
import NotFound from "./pages/NotFound"
import Cards from "./pages/ShowCars"
import Login from "./components/Login/Login"
import Layout from "./pages/Layout"
import Register from "./components/Register/Register"
import SearchPage from "./pages/SearchPage/SearchPage"
import ShowCarsFav from "./pages/ShowCarsFav/ShowCarsFav"
import { RequireAuth } from "./contexts/RequireAuth"
import DetailedCar from "./pages/DetailedCar/DetailedCar"
import FormCar from "./pages/FormCar/FormCar"


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cards',
        element: <Cards/>
      },
      {
        path: '/search',
        element: <SearchPage/>
      },
      {
        path: '/cardetailed/:id',
        element: <DetailedCar/>
      },
      {
        path: '/formcar',
        element: <FormCar/>
      },
      {
        path: '/carsfav',
        element: <RequireAuth><ShowCarsFav/></RequireAuth>
      },
    ]
  },
  {
    path: '*',
    element: <NotFound/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register />
  },
])