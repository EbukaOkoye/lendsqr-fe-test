import { stars } from '../../utility/utils'
import avatar from '../../assets/user-avatar.svg'

const UserTop = () => {
  return (
    <div className='user-top-wrapper'>
        <div className="user-top">
            <div className="username-box">
                <div className="user-avatar">
                    <img src={avatar} alt="" />
                </div>

                <div className="username-name-code">
                    <p className='username-name'>Grace Effiom</p>
                    <p className="username-code">LSQFf587g90</p>
                </div>
            </div>

            <div className="username-stars">
                <p>User's Tier</p>
                {
                    stars.map( (star, indx) => (
                        <img key={indx} src={star.icon} alt="" />
                    ))
                }
            </div>

            <div className="username-account">
                <p className="username-amount">₦200,000.00</p>
                <p className="username-bank">9912345678/Providus Bank</p>
            </div>
        </div>

        <div className="username-tabs">
            <p>General Details</p>
            <p>Documents</p>
            <p>Bank Details</p>
            <p>Loans</p>
            <p>Savings</p>
            <p>App and System</p>
        </div>
    </div>
  )
}

export default UserTop