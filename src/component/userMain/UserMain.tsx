import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import UserTop from '../userTop/UserTop'
import UserInfo from '../userInfo/UserInfo'

const UserMain = () => {

    const back = useNavigate();

  return (
    <div className='user-wrapper'>
       <div className='users-back' onClick={
        () => {
            back('/dashboard')
        }
       }> <p className='user-back-icon'><BiArrowBack /></p> <p className='user-back-text'>Back to Users</p></div> 
        <div className="details">
            <p>User Details</p>
            <div className="details-btn">
                <button className='btn-blacklist'>Blacklist User</button>
                <button className='btn-activate'>Activate User</button>
            </div>
        </div>

        <UserTop />
        <UserInfo />
    </div>
  )
}

export default UserMain