
import SalesAnalytics from '../../Components/Admin/Charts/SalesAnalytics'
import ComponentHeader from '../../Components/Admin/Header/ComponentHeader'

function AdminDashboard() {
  return (
    <>
      {/* <SideBar/> */}
      <ComponentHeader title={'Dashboard'}/>
      <SalesAnalytics/>
    </>
  )
}

export default AdminDashboard