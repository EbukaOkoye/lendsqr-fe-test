import Data from '../dataFetch/Data'
import { dashCards } from '../../utility/utils'

const DashboardMain = () => {
  return (
    <div className='dashboard-main'>
        <h2>Users</h2>

        <div className="dashboard-cards">
            {
                dashCards.map( (card, index) => (
                    <div className={`cards cards-${index + 1}`} key={index}>
                        {<card.icon className={`icons icons-${index + 1}`} />}
                        <p>{card.label}</p>
                        <h2>{card.number}</h2>
                    </div>
                ))
            }
        </div>

        <div className='table-wrapper'>
            <Data />
        </div>
    </div>
  )
}

export default DashboardMain