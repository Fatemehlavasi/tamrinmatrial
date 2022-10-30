
import Main from "../Pages/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Welcome from "../Pages/Welcome"
import { createBrowserRouter } from 'react-router-dom';
import Layout from "../Layout/Layout";



// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Main />,
//     },
//     {
//         path: "/register",
//         element: <Register />,
//     },
//     {
//         path: "/login",
//         element: <Login />,
//     },
//     {
//         path: "/welcome",
//         element: <Welcome />,
//     },




    const router = createBrowserRouter([
        {
          path: "/",
          
          element: <Layout/>,
          children:[
            {
                index: true,
                element: <Main/>,
                  
            },
            {
                path: "Register",
                element: <Register/>,
                  
            },
            {
                path: "Login",
                element: <Login/>,
                  
            },
            {
                path: "welcome",
                element: <Welcome/>,
                  
            },
          ]
            
        },
]);
export default router