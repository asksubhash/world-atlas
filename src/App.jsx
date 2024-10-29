
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import CountryDetail from "./pages/CountryDetail";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

const router=createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'country',
        element: <Country/>
      },
      {
        path:'country/:id',
        element: <CountryDetail/>
      },
      {
        path:'contact',
        element: <Contact/>
      },
      {
        path:'privacy',
        element: <Policy/>
      },
      {
        path:'terms',
        element: <Terms/>
      },
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;