import { CiSearch } from 'react-icons/ci'
import { BsBell } from 'react-icons/bs'
import { MdArrowDropDown } from 'react-icons/md'
import logo from '../../assets/Union.svg'
import avatar from '../../assets/avatar.svg'
import '../../App.scss'
import { useNavigate } from 'react-router'

const Header = () => {

    const toHome = useNavigate()

  return (
    <div className='header-wrapper'>
        <div className="header-left">
            <div className="logo-container" onClick={
                () => toHome('/')
            }>
                <img className='logo' src={logo} alt="" />
                <p>lendsqr</p>
            </div>

            <div className="search">
                <input className='search-input' type="search" placeholder='search for anything' />
                <CiSearch className='search-icon' />
            </div>
        </div>

        <div className="header-right">
            <p className='docs'>Docs</p>
            <span><BsBell className='bell-icon' /></span>
            <div className="user-right">
                <div className="avatar-img">
                    <img src={avatar} alt="" />
                </div>
                <div className='username'>
                    <p>Adedeji</p>
                    <MdArrowDropDown /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header