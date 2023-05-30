import { IconType } from "react-icons"

export type NavListCutomerType = {
    list: string,
    icon: IconType, 
}

export type NavlistBusinessType = {
    list: string,
    icon: IconType
}

export type NavListSettingsType = {
    list: string,
    icon: IconType
}

export type DashboardCardType = {
    icon: IconType,
    label: string,
    number: string
}

export type TableHeadType = {
    head: string,
    icon: IconType
}

export type DashOptionModal = {
    option: string,
    icon: IconType
}

export type StarType = {
    icon: string
}

// User Details Personal Information
export type PersonalInfo = {
    top: string,
    bottom: string
}

export type EducationInfo = {
    top: string,
    bottom: string
}

export type SocialsInfo = {
    top: string,
    bottom: string
}

export type GuarantorInfo = {
    top: string,
    bottom: string
}