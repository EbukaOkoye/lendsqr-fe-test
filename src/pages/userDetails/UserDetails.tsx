import Header from '../../component/header/Header'
import Sidebar from '../../component/sidebar/Sidebar'
import UserMain from '../../component/userMain/UserMain'

const UserDetails = () => {
  return (
    <div>
      <Header />
      <main className="dash-main">
        <Sidebar /> 
        <UserMain />
      </main> 
    </div>
  )
}

export default UserDetails