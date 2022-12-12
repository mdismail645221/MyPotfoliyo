import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SingleMyProject from "../pages/MyProjects/SingleMyProject";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <div>NOT FOUND</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signProjects/:id',
                element: <SingleMyProject></SingleMyProject>,
                loader: async({params})=> fetch(`https://myportfolio-server.vercel.app/projects/${params.id}`)
            }
        ]
    }
])