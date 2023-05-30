import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/Union.svg'
import bannerImg from '../../assets/pablo-sign-in.svg'

const Login = () => {

    const toDash = useNavigate()

  return (
    <div className='login-container'>
        <div className="image-container">
            <div className="logo-container">
                <img className='logo' src={logo} alt="" />
                <p>lendsqr</p>
            </div>

            <div className="login-banner-left">
                <img src={bannerImg} alt="" />
            </div>
        </div>

        <div className="form-container">
            <div className="header">
                <h2>Welcome!</h2>
                <p>Enter details to login</p>
            </div>

            <form className="login-form">
                <div className='email'>
                    <input className='email-input' type="email" placeholder='Email'  />
                </div>

                <div className="password-container">
                    <div className='password'>
                        <input className='password-input' type="password" placeholder='Password' />
                        <p className='show'>SHOW</p>
                    </div>
                </div>
                <p className="forgot-password">
                    <Link className='forgot' to='#'>FORGOT PASSWORD?</Link>
                </p>
                <input onClick={
                    () => toDash('/dashboard')
                } className='login' type="submit" value=" LOG IN" />
            </form>
        </div>
    </div>
  )
}

export default Login