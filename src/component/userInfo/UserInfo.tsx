import { useEffect } from 'react'
import { personalInfo, education, socials, guarantor } from '../../utility/utils'

const UserInfo = () => {

    useEffect( () => {
        localStorage.setItem('Personal Info', JSON.stringify(personalInfo));
        localStorage.setItem('Education', JSON.stringify(education));
        localStorage.setItem('Socials', JSON.stringify(socials));
        localStorage.setItem('guarantor', JSON.stringify(guarantor));
    }, [])


  return (
    <div className='user-info-wrapper'>
        <div className="user-info-information">
            <p className='user-info-heading'>Personal Information</p>
            <div className="personal-info">
                {
                    personalInfo.map( (info, i) => (
                        <div className='info' key={i}>
                            <p className='top'>{info?.top}</p>
                            <p className="bottom">{info?.bottom}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="user-education">
            <p className='user-education-heading'>Education and Employment</p>
            <div className="education">
                {
                    education.map( (list, idx) => (
                        <div className='educatn' key={idx}>
                            <p className='top'>{list?.top}</p>
                            <p className="bottom">{list?.bottom}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="user-socials">
            <p className="user-socials-heading">Socials</p>
            <div className="socials">
                {
                    socials.map( (social, index) => (
                        <div className='user-social' key={index}>
                            <p className="top">{social.top}</p>
                            <p className="bottom">{social.bottom}</p>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="user-guarantor">
            <p className="user-guarantor-heading">Guarantor</p>
            <div className="gurantor">
                {
                    guarantor.map( (g, indx) => (
                        <div className="guarantors" key={indx}>
                            <p className="top">{g.top}</p>
                            <p className="bottom">{g.bottom}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default UserInfo