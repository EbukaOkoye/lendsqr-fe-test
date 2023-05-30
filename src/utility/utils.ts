import { NavListCutomerType, NavlistBusinessType, NavListSettingsType, 
    DashboardCardType, TableHeadType,DashOptionModal, StarType, 
    PersonalInfo, EducationInfo, SocialsInfo, GuarantorInfo
} from "./type";
import { BiFilter } from 'react-icons/bi'
import { BsBank, BsPhoneFlip, BsEye } from 'react-icons/bs'
import { FaUsers, FaScroll, FaRegHandshake, FaRegTimesCircle, FaUserCheck, FaUserTimes, FaBriefcase, FaCoins, FaUserCog } from 'react-icons/fa'
import { GiReceiveMoney, GiTwoCoins } from 'react-icons/gi'
import { HiOutlineUsers } from 'react-icons/hi'
import { ImUsers } from 'react-icons/im'
import { IoMdSwitch } from 'react-icons/io'
import { MdMiscellaneousServices, MdAnalytics } from 'react-icons/md'
import { TbMoneybag, TbPigMoney, TbReportAnalytics } from 'react-icons/tb'


import star from '../assets/star.svg'
import starStroke from '../assets/star-stroke.svg'



// Sidebar nav-links
export const navCustomerList: NavListCutomerType[] = [
    {
        list: 'Users',
        icon: ImUsers,
    },

    {
        list: 'Guarantors',
        icon: FaUsers
    },

    {
        list: 'Loans',
        icon: TbMoneybag
    },

    {
        list: 'Decision Models',
        icon: FaRegHandshake
    },

    {
        list: 'Savings',
        icon: TbPigMoney
    },

    {
        list: 'Loan Requests',
        icon: GiReceiveMoney
    },

    {
        list: 'Whitelist',
        icon: FaUserCheck
    },

    {
        list: 'Karma',
        icon: FaUserTimes
    },
]

export const navBusinessList: NavlistBusinessType[] = [
    {
        list: 'Organization',
        icon: FaBriefcase
    },

    {
        list: 'Loan Products',
        icon: GiReceiveMoney
    },

    {
        list: 'Savings Products',
        icon: BsBank
    },

    {
        list: 'Fees and Charges',
        icon: FaCoins
    },

    {
        list: 'Transactions',
        icon: BsPhoneFlip
    },

    {
        list: 'Services',
        icon: MdMiscellaneousServices
    },

    {
        list: 'Service Account',
        icon: FaUserCog
    },

    {
        list: 'Settlements',
        icon: FaScroll
    },

    {
        list: 'Reports',
        icon: MdAnalytics
    },

]

export const navSettingsList:NavListSettingsType[] = [
    {
        list: 'Preferences',
        icon: IoMdSwitch
    },

    {
        list: 'Fees and Pricing',
        icon: FaRegTimesCircle
    },

    {
        list: 'Audit Logs',
        icon: TbReportAnalytics
    },
]

// dashboard cards
export const dashCards: DashboardCardType[] = [
    {
        icon: HiOutlineUsers,
        label: 'USERS',
        number: '2,453'
    },

    {
        icon: FaUsers,
        label: 'ACTIVE USERS',
        number: '2,453'
    },

    {
        icon: GiTwoCoins,
        label: 'USERS WITH LOANS',
        number: '12,453'
    },

    {
        icon: FaCoins,
        label: 'USERS WITH SAVINGS',
        number: '102,453'
    },
]

// Dashboard Table head
export const tableHead: TableHeadType[] = [
    {
        head: 'ORGANIZATION',
        icon: BiFilter
    },

    {
        head: 'USERNAME',
        icon: BiFilter
    },

    {
        head: 'EMAIL',
        icon: BiFilter
    },

    {
        head: 'PHONE NUMBER',
        icon: BiFilter
    },

    {
        head: 'DATE JOINED',
        icon: BiFilter
    },

    {
        head: 'STATUS',
        icon: BiFilter
    },
]

export const optionModal:DashOptionModal[] = [
    {
        option: 'View Details',
        icon: BsEye
    },

    {
        option: 'Blacklist User',
        icon: FaUserTimes
    },

    {
        option: 'Activate User',
        icon: FaUserCheck
    },
]

export const stars:StarType[] = [
    {
        icon: star
    },

    {
        icon: starStroke
    },

    {
        icon: starStroke
    },
]

export const personalInfo:PersonalInfo[] = [
    {
        top: 'full Name',
        bottom: 'Grace Effiom'
    },

    {
        top: 'Phone Number',
        bottom: '07060780922'
    },

    {
        top: 'Email Address',
        bottom: 'grace@gmail.com'
    },

    {
        top: 'Bvn',
        bottom: '07060780922'
    },

    {
        top: 'Gender',
        bottom: 'Female'
    },

    {
        top: 'Marital status',
        bottom: 'Single'
    },

    {
        top: 'Children',
        bottom: 'None'
    },

    {
        top: 'Type of residence',
        bottom: 'Parent’s Apartment'
    },
]

export const education:EducationInfo[] = [
    {
        top: 'level of education',
        bottom: 'B.Sc'
    },

    {
        top: 'employment status',
        bottom: 'Employed'
    },

    {
        top: 'sector of employment',
        bottom: 'FinTech'
    },

    {
        top: 'Duration of employment',
        bottom: '2 years'
    },

    {
        top: 'office email',
        bottom: 'grace@lendsqr.com'
    },

    {
        top: 'Monthly income',
        bottom: '₦200,000.00- ₦400,000.00'
    },

    {
        top: 'loan repayment',
        bottom: '40,000'
    },
]

export const socials:SocialsInfo[] = [
    {
        top: 'Twitter',
        bottom: '@grace_effiom'
    },

    {
        top: 'Facebook',
        bottom: 'Grace Effiom'
    },

    {
        top: 'Instagram',
        bottom: '@grace_effiom'
    },
]

export const guarantor:GuarantorInfo[] = [
    {
        top: 'Full Name',
        bottom: 'Debby Ogana'
    },

    {
        top: 'Phone Number',
        bottom: '07060780922'
    },

    {
        top: 'Email Address',
        bottom: 'debby@gmail.com'
    },

    {
        top: 'Relationship',
        bottom: 'Sister'
    },
]