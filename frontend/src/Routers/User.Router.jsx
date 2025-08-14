import { createBrowserRouter } from 'react-router'
import HomePage from '../Pages/HomePage'
import Login from '../Components/auth/Login'
import UserLayout from '../Components/Layouts/UserLayout'
import CompareIndex from '../Components/Compare/CompareIndex'
import WishlistIndex from '../Components/Wishlist/WishlistIndex'
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
                },
                {
                    path: 'compare', // ✅ remove the leading slash
                    element: <CompareIndex />
                },
                  {
                    path: 'wishlist', // ✅ remove the leading slash
                    element: <WishlistIndex />
                }
            ]
        }
    ]
)
