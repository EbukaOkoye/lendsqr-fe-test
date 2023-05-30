import Header from '../../component/header/Header'
import Sidebar from '../../component/sidebar/Sidebar'
import DashboardMain from '../../component/dashboardMain/DashboardMain'

const Dashboard = () => {
  return (
    <div>
        <Header />
        <main className="dash-main">
          <Sidebar />
          <DashboardMain />
        </main>
    </div>
  )
}

export default Dashboard