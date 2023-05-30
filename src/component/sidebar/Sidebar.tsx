import { Link, useNavigate } from 'react-router-dom'
import { navCustomerList, navBusinessList, navSettingsList } from '../../utility/utils'
import { FaBriefcase, FaHome } from 'react-icons/fa'
import { RiArrowDropDownLine } from 'react-icons/ri'

const Sidebar = () => {
    const to = useNavigate()


  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <ul>
                <li><Link to=''><span className='link-icons'><FaBriefcase /></span> <span className='link-lists'>Switch Organization</span> <span><RiArrowDropDownLine /></span></Link></li>
            </ul>
        </div>

        <div className="dashboard">
        <ul>
                <li><Link to=''><span className='link-icons'><FaHome /></span> <span>Dashboard</span> </Link></li>
            </ul>
        </div>

        <div className="customers">
            <p className='heading'>CUSTOMERS</p>

            <div className="customers-links">
                <ul className='ul-link'>
                    {
                        navCustomerList.map( (list, id) => (
                            <li key={id}>
                                <p className='use-link' onClick={
                                    () => {
                                        id === 0 ? to('/user') : ''
                                    }
                                }><span className='link-icons'>{<list.icon />}</span> <span className='link-lists'>{list.list}</span></p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

        <div className="businesses">
            <p className='heading'>BUSINESSES</p>

            <div className="business-links">
                <ul className='ul-link'>
                    {
                        navBusinessList.map( (businessLi, index) => (
                            <li key={index}>
                                <Link to=''><span className='link-icons'>{<businessLi.icon />}</span> <span className='link-lists'>{businessLi.list} </span></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

        <div className="settings">
            <p className='heading'>SETTINGS</p>

            <div className="settings-links">
                <ul className='ul-link'>
                    {
                        navSettingsList.map( (settings, indx) => (
                            <li key={indx}>
                                <Link to=''><span className='link-icons'>{<settings.icon />}</span> <span className='link-lists'>{settings.list}</span></Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar