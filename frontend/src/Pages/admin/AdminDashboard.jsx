import SalesAnalytics from '../../Components/Admin/Charts/SalesAnalytics'
import ComponentHeader from '../../Components/Admin/Header/ComponentHeader'
import AdminProfileIndex from '../../Components/Admin/Profile/aDMINpROFILEiNDEX.JSX'

function AdminDashboard() {
  return (
    <>
      <ComponentHeader title={'Dashboard'} />

      {/* === Grid Structure === */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Profile */}
        <div className="lg:col-span-1">
          <AdminProfileIndex />
        </div>

        {/* Right Side - 3 Info Boxes */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Orders */}
          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <p className="text-gray-500">Orders</p>
            <h2 className="text-2xl font-bold">1,235</h2>
          </div>

          {/* Revenue */}
          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-2xl font-bold">$35,723</h2>
          </div>

          {/* Average Price */}
          <div className="bg-white shadow-md rounded-2xl p-6 text-center">
            <p className="text-gray-500">Average Price</p>
            <h2 className="text-2xl font-bold">$16.2</h2>
          </div>
        </div>
      </div>

      {/* === Monthly Earning & Chart === */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Earning Card */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-gray-500">Monthly Earning</h3>
          <p className="text-3xl font-bold mt-2">$34,252</p>
          <p className="text-green-500 text-sm">↑ 12% From previous period</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg">
            View More
          </button>
          <p className="text-gray-400 mt-4">
            We craft digital, graphic and dimensional thinking.
          </p>
        </div>

        {/* Chart Component (Already Created) */}
        <SalesAnalytics />
      </div>
    </>
  )
}

export default AdminDashboard
