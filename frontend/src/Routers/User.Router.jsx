import { createBrowserRouter } from 'react-router'
import HomePage from '../Pages/HomePage'
import Login from '../Components/auth/Login'
import UserLayout from '../Components/Layouts/UserLayout'
import CompareIndex from '../Components/Compare/CompareIndex'
import WishlistIndex from '../Components/Wishlist/WishlistIndex'
import CartIndex from '../Components/Cart/CartIndex'
import CartOrderDetails from '../Components/Cart/CartOrderDetails'
import ProfileIndex from '../Components/Profile/ProfileIndex'
import DashboardProfile from '../Components/Profile/DashboardProfile'
import YourOrders from '../Components/Profile/YourOrders'
import UserAddress from '../Components/Profile/UserAddress'
import OrdersTracking from '../Components/Profile/OrdersTracking'
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
                }, {
                    path: 'cart', // ✅ remove the leading slash
                    element: <CartIndex />,
                    children: [
                        {
                            path: 'order-details', // ✅ remove the leading slash
                            element: <CartOrderDetails />
                        }
                    ]
                }, {
                    path: 'profile',
                    element: <ProfileIndex />,
                    children: [
                        { index: true, element: <DashboardProfile /> }, // default route (/profile)
                          { path: 'orders', element: <YourOrders /> },
                          { path: 'orders/track', element: <OrdersTracking /> },
                          { path: 'address', element: <UserAddress /> },
                        //   { path: 'address', element: <Address /> },
                        //   { path: 'account', element: <AccountDetails /> }
                    ]
                }
            ]
        }
    ]
)
