import { createBrowserRouter } from 'react-router'
import HomePage from '../Pages/HomePage'
import Login from '../Components/auth/Login'
import UserLayout from '../Components/Layouts/UserLayout'
export const routers = createBrowserRouter(
    [
        {
            path: '/',
            element: <UserLayout />,
            children: [
                {
                    path: '', // ✅ remove the leading slash
                    element: <HomePage />
                },
                {
                    path: 'login', // ✅ remove the leading slash
                    element: <Login />
                }
            ]
        }
    ]
)
