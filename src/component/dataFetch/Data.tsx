import { useEffect, useState } from 'react'
import axios from 'axios'
import { tableHead, optionModal } from '../../utility/utils'
import { Link } from 'react-router-dom'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { SlOptionsVertical } from 'react-icons/sl'


const toggleStatus = (index:number): {status:string, className: string} => {
    const status = ['inactive', 'pending', 'active', 'blocklisted']
    const className = `status-${status[index % status.length]}`
    return {status: status[index % status.length], className};
}

const Data = () => {

    const [ data, setData ] = useState<any[]>([])
    const [ currentPage, setCurrentPage ] = useState<number>(1)
    const [selectedRowIndex, setSelectedRowIndex] = useState<number>(-1);
    // const [ modal, setModal ] = useState<boolean>(false)
    const recordsPerPage = 20;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const dataRecords = data.slice(firstIndex, lastIndex)
    const nPage = Math.ceil(data.length / recordsPerPage)
    const pageNumbers = [...Array(nPage + 1).keys()].slice(1)


    useEffect( ()=> {
        fetchData()
    }, [currentPage])

    const fetchData = () => {
        axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        .then( res => {
            console.log(res.data)
            setData(res.data)
        })
    }

    const prevPage = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCurrPage:any = (id:number) => {
        setCurrentPage(id)
    }

    const nxtPage = () => {
        if(currentPage !== lastIndex) {
            setCurrentPage(currentPage + 1)
        }
    }


  return (
    <div className='table'>
        <table>
            <thead>
                <tr>
                    {
                        tableHead.map( (head, index) => (
                            <th key={index}> <span>{head.head}</span> <span>{<head.icon />}</span></th>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {
                    dataRecords?.map( (datum: any, index: number) => (
                        <tr key={index}>
                            <td>{datum?.orgName}</td>
                            <td>{datum?.userName}</td>
                            <td>{datum?.email}</td>
                            <td>{datum?.phoneNumber}</td>
                            <td>{datum?.createdAt}</td>
                            <td className='options'><p className={toggleStatus(index).className}>{toggleStatus(index).status}</p> <span onClick={
                                () => {
                                    if(selectedRowIndex === index) {
                                        setSelectedRowIndex(index = -1)
                                    } else {
                                        setSelectedRowIndex(index) 
                                    }
                                }
                                }><SlOptionsVertical/></span>
                                {
                                    selectedRowIndex === index ? (
                                        <div className='modal-wrapper'>
                                            {
                                                optionModal.map( (list, idx) => (
                                                    <p className='icon-modal' key={idx}><span>{<list.icon />}</span> <span>{list?.option}</span></p>
                                                ))
                                            }
                                        </div>      
                                    ) : ''
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

        <div className='page-holder'>
           <ul className='pagination'>
            <li className='page-item'><Link className='page-link' to={''}
                onClick={() => prevPage()}
                ><GrFormPrevious/></Link>
            </li>
            {
                pageNumbers.map( (n:number, i:number) => (
                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                        <a className='page-link' href={''}
                        onClick={() => changeCurrPage(n)}
                        >{n}</a>
                    </li>
                ))
            }
            <li className='page-item'><Link className='page-link' to={''}
                onClick={ () => nxtPage()}
                ><GrFormNext/></Link>
            </li>
           </ul>
        </div>
    </div>
  )
}

export default Data